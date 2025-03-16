import { Request, response, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import ApiError from "../utils/ApiError";
import prisma from "@repo/db";
import ApiResponse from "../utils/ApiResponse";
const addProblemToDb = asyncHandler(async (req: Request, res: Response) => {
  try {
    const {
      problemNumber,
      problemId,
      inputText1,
      inputText2,
      inputText3,
      title,
      testCases,
      examples,
      difficulty,
      handlerFunc,
      likesCount,
      dislikeCount,
      starterFunctionName,
    } = req.body;
    console.log(req.body);
    // if (!problem) {
    //   const error = new ApiError(
    //     400,
    //     "Problem statement are not here",
    //     problem
    //   );

    //   throw error;
    // }

    const createProblem = await prisma.problem.create({
      data: {
        starterFunctionName,
        handlerFunc,
        likesCount,
        dislikeCount,
        problemNumber,
        problemId,
        inputText1,
        inputText2,
        inputText3,
        problemTitle: title,
        difficulty,
        examples: {
          create: examples.map(
            (example: {
              inputText: any;
              outputText: any;
              explanation: any;
              img: any;
            }) => ({
              inputText: example.inputText,
              outputText: example.outputText,
              explanation: example.explanation,

              problemId: problemId, // Ensure problemId is included
            })
          ),
        },
        testCases: {
          create: testCases.map((testCase: { input: any; output: any }) => ({
            input: testCase.input,
            output: testCase.output,
            problemId: problemId, // Ensure problemId is included
          })),
        },
      },
    });

    console.log(response);
  } catch (error) {
    res.send(error);
  }
});
const getProblemFromDb = asyncHandler(async (req: Request, res: Response) => {
  try {
    console.log("gekkjk");
    const getProblem = await prisma.problem.findMany({
      where: {},
    });
    console.log(getProblem);
    res.send(new ApiResponse(201, getProblem, "Successfully get the data"));
  } catch (error) {
    res.send(error);
  }
});

export { addProblemToDb, getProblemFromDb };
