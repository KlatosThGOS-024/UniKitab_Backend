import { Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asynchHandler";
import prisma from "@repo/db";

const addProblemToDb = asyncHandler(async (req: Request, res: Response) => {
  try {
    const {
      problemNumber,
      problemId,
      inputText1,
      inputText2,
      inputText3,
      problemTitle,
      testCases,
      examples,
      difficulty,
      handlerFunc,
      likesCount,
      dislikeCount,
      starterFunctionName,
    } = req.body;

    if (
      !problemNumber ||
      !problemId ||
      !problemTitle ||
      !testCases ||
      !examples ||
      !difficulty
    ) {
      res.status(400).send(ApiResponse.failure(400, "Missing required fields"));
    }

    // Create the problem and its related data
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
        problemTitle,
        difficulty,
        examples: {
          create: examples.map(
            (example: {
              inputText: any;
              outputText: any;
              explanation: any;
            }) => ({
              inputText: example.inputText,
              outputText: example.outputText,
              explanation: example.explanation,
            })
          ),
        },
        testCases: {
          create: testCases.map((testCase: { input: any; output: any }) => ({
            input: testCase.input,
            output: testCase.output,
          })),
        },
      },
    });

    // Send success response
    res.send(
      ApiResponse.success(201, "Successfully added the problem", createProblem)
    );
  } catch (error) {
    // Log the error for debugging (remove in production)
    console.error("Database error:", error);

    // Send error response with detailed message
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unexpected error occurred while adding the problem.";
    res.send(ApiError.badRequest(false, errorMessage));
  }
});
const getProblemFromDb = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { problemId } = req.query;
    if (!problemId) {
      res.send(ApiResponse.failure(400, "Missing required fields ProblemId"));
    }

    //Create the problem and its related data
    const findProblem = await prisma.problem.findFirst({
      where: {
        //@ts-ignore
        problemId,
      },
    });

    // Send success response
    res.send(
      ApiResponse.success(201, "Successfully added the problem", findProblem)
    );
  } catch (error) {
    // Log the error for debugging (remove in production)
    console.error("Database error:", error);

    // Send error response with detailed message
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unexpected error occurred while adding the problem.";
    res.send(ApiError.badRequest(false, errorMessage));
  }
});

export { addProblemToDb, getProblemFromDb };
