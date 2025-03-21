import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asynchHandler";
import { ApiResponse } from "../utils/ApiResponse";
import QuestionType from "@repo/types";
enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

interface GeminiProblemResponse {
  candidates: [
    {
      content: {
        parts: [{ text: string }];
      };
    },
  ];
}

function extractJsonFromCodeBlock(text: string): string {
  const codeBlockMatch = text.match(/```(?:json)?\n([\s\S]*?)```/);
  if (codeBlockMatch && codeBlockMatch[1]) {
    return codeBlockMatch[1];
  }
  return text;
}

function mapDifficulty(difficultyString: string) {
  const difficultyMap: { [key: string]: Difficulty } = {
    Easy: Difficulty.Easy,
    Medium: Difficulty.Medium,
    Hard: Difficulty.Hard,
  };

  return difficultyMap[difficultyString] || Difficulty.Medium;
}

function processGeminiResponse(responseText: string): QuestionType["Problem"] {
  try {
    const jsonText = extractJsonFromCodeBlock(responseText);
    const parsedData = JSON.parse(jsonText);

    const metadata = parsedData.problemMetadata;

    const examples: QuestionType["Example"][] = metadata.examples.map(
      (ex: any, index: number) => ({
        problemId: metadata.problemId,
        inputText: ex.inputText,
        outputText: ex.outputText,
        explanation: ex.explanation || `Example ${index + 1}`,
        img: undefined,
      })
    );

    const testCases: QuestionType["TestCases"][] = metadata.testCases.map(
      (tc: any) => ({
        problemId: metadata.problemId,
        input: tc.input,
        output: tc.output,
      })
    );

    let handlerFunc = metadata.handlerFunc;
    if (handlerFunc.includes("```")) {
      handlerFunc = handlerFunc.replace(
        /```(?:javascript)?\n([\s\S]*?)```/,
        "$1"
      );
    }

    return {
      problemNumber: metadata.problemNumber.toString(),
      problemId: metadata.problemId,
      problemTitle: metadata.problemTitle,
      inputText1: metadata.inputText1,
      inputText2: metadata.inputText2,
      inputText3: metadata.inputText3,
      difficulty: mapDifficulty(metadata.difficulty),
      likesCount: metadata.likesCount || 0,
      dislikeCount: metadata.dislikeCount || 0,
      examples,
      testCases,
      handlerFunc,
      starterFunctionName: metadata.starterFunctionName,
    };
  } catch (error) {
    console.error("Error processing Gemini response:", error);
    throw new Error("Failed to process AI response into required format");
  }
}

export async function processProblemDescription(
  problemDescription: string
): Promise<QuestionType["Problem"]> {
  if (!problemDescription || problemDescription.trim() === "") {
    throw new Error("Problem description is required");
  }

  const api = process.env.AiAPI;

  if (!api) {
    throw new Error("AI API key is not configured");
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `Convert the following DSA problem description into a structured coding problem:
              
              ${problemDescription}
              
              Please format it as a JSON object with the following structure:
              {
                "problemMetadata": {
                  "problemNumber": number,
                  "problemId": "kebab-case-id",
                  "problemTitle": "Problem Title",
                  "inputText1": "Main problem description",
                  "inputText2": "Input/output specifications and constraints",
                  "inputText3": "Additional notes or hints",
                  "difficulty": "Easy|Medium|Hard",
                  "likesCount": 0,
                  "dislikeCount": 0,
                  "examples": [
                    {
                      "inputText": "Sample input as string",
                      "outputText": "Expected output as string",
                      "explanation": "Explanation of the example"
                    }
                  ],
                  "testCases": [
                    {
                      "input": "Test input as string",
                      "output": "Expected output as string"
                    }
                  ],
                  "handlerFunc": "Function that validates the user's solution, dont use backticks use double "" for enraping it as string ",
                  "starterFunctionName": "Name of the function to implement"
                }
              }
              
              Make sure:
              1. The problemId is in kebab-case (lowercase with hyphens)
              2. All arrays have at least 2-3 items
              3. Generate good test cases that cover edge cases
              4. The handlerFunc should be valid JavaScript that correctly tests the solution
              5. All JSON is properly formatted and valid`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 2048,
      },
    }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`AI service error: ${JSON.stringify(errorData)}`);
  }

  const data = await response.json();

  if (
    !data.candidates ||
    !data.candidates[0] ||
    !data.candidates[0].content ||
    !data.candidates[0].content.parts[0]
  ) {
    throw new Error("Invalid response from AI service");
  }

  const rawProblemData = data.candidates[0].content.parts[0].text;
  console.log("fds", rawProblemData);
  return processGeminiResponse(rawProblemData);
}

const parseDSASheet = asyncHandler(async (req: Request, res: Response) => {
  const { sheetContent } = req.body;

  if (!sheetContent || !sheetContent.length) {
    throw new ApiError("Sheet content is required", 400);
  }

  try {
    const problems: QuestionType["Problem"][] = [];

    for (const description of sheetContent) {
      try {
        const problem = await processProblemDescription(description);
        problems.push(problem);
        if (problems.length > 7) {
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      } catch (err) {
        console.error(
          `Error processing problem "${description.substring(0, 50)}...":`,
          err
        );
      }
    }

    res.send(
      new ApiResponse(
        200,
        true,
        `Successfully parsed ${problems.length} problems from the sheet`,
        problems
      )
    );
  } catch (error: any) {
    console.error("Error parsing DSA sheet:", error);

    if (error instanceof ApiError) {
      throw error;
    }

    res.send(
      new ApiError(
        error.message || "Failed to parse DSA sheet",
        error.statusCode || 500,
        false
      )
    );
  }
});
import * as fs from "fs";
import * as path from "path";

const generateProblemArray = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { problemDescriptions } = req.body as any;
    console.log("3");
    if (problemDescriptions == "") {
      throw new ApiError("Problem description is required", 400);
    }
    const api = process.env.AiAPI;
    console.log("3");
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Here in this text some garbage and some questions of dsa are included:
                   
                  ${problemDescriptions}
                   
                  Please format it as a Array of objects with the following structure:
                  [{
                  id:starting from 1,
                  category:"What category is of this question",
                  questionTitle:"Title of question",
                  difficulty:"write the difficulty"
                  },]
                   
                  Make sure:
                  1.Remove the garbage which is not question
                  2. All objects have at least 4 items
                  3. All JSON is properly formatted and valid
                  4. if id increases 100 stop the execution there and send only 100s question only
                  `,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.2,
          },
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`AI service error: ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();

      if (
        !data.candidates ||
        !data.candidates[0] ||
        !data.candidates[0].content ||
        !data.candidates[0].content.parts[0]
      ) {
        throw new Error("Invalid response from AI service");
      }

      const rawProblemData = data.candidates[0].content.parts[0].text;

      // Create a file and save the rawProblemData
      const filePath = path.join(__dirname, "rawProblemData.json");
      fs.writeFileSync(filePath, rawProblemData);

      res.send(
        new ApiResponse(
          200,
          true,
          "Successfully get the questions and saved to file",
          rawProblemData
        )
      );
    } catch (error: any) {
      console.error("Error generating problem:", error);

      if (error instanceof ApiError) {
        throw error;
      }

      throw new ApiError(
        error.message || "Failed to generate problem",
        error.statusCode || 500,
        error.error || error
      );
    }
  }
);

export { parseDSASheet, generateProblemArray };
