import { reverseArrayQ } from "@/components/LiteCodeComponent/MockProblem/ReverseArrayQ";

export const getQuestions = async (problemId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/problems?problemId=${problemId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export async function addQtoDb() {
  try {
    console.log("fsjfshfjskdhfkj");
    const questionData = reverseArrayQ[0];
    const {
      problemNumber,
      title,
      inputText1,
      inputText2,
      inputText3,
      difficulty,
      dislikeCount,
      likesCount,
      testCases,
      starterFunctionName,
      handlerFunc,
      problemId,
      examples,
    } = questionData;

    const handler = handlerFunc.toString();

    const testCasesArray = testCases.map((testCase) => {
      return {
        problemId: testCase.problemId,
        input: testCase.input,
        output: testCase.output,
      };
    });
    const examplesArray = examples.map((example) => {
      return {
        problemId: example.problemId,

        inputText: example.inputText,
        outputText: example.outputText,
        explanation: example.explanation,
      };
    });
    console.log({
      problemNumber,
      title,
      inputText1,
      inputText2,
      inputText3,
      difficulty,
      dislikeCount,
      likesCount,
      testCases: testCasesArray,
      starterFunctionName,
      handlerFunc: handler,

      problemId,

      examples: examplesArray,
    });
    // const newProblem = await prisma.problems.create({
    //   data: {
    //     problemNumber,
    //     problemId,
    //     title,
    //     inputText1,
    //     inputText2,
    //     inputText3,
    //     difficulty,
    //     likesCount,
    //     dislikeCount,
    //     handlerFunc: handler,
    //     starterFunctionName,
    //     examples: {
    //       create: examplesArray,
    //     },
    //     testCases: {
    //       create: testCasesArray,
    //     },
    //   },
    // });
    const response = await fetch(
      "http://localhost:8000/api/v1/problem/createQ",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problemNumber,
          problemId,
          title,
          inputText1,
          inputText2,
          inputText3,
          difficulty,
          likesCount,
          dislikeCount,
          handlerFunc: handler.replace(/[^\x00-\x7F]/g, ""), // Remove non-ASCII characters
          starterFunctionName,
          examples: examplesArray,
          testCases: testCasesArray,
        }),
      }
    );

    console.log(response);
    console.log("New Problem created:");
    // return NextResponse.json(new ApiResponse(200, "Success", [newProblem]));
  } catch (error: any) {
    console.log(error);
    // return NextResponse.json(new ApiResponse(400, "Failure", error));
  }
}
