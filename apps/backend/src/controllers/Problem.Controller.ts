import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import ApiError from "../utils/ApiError";

const addProblemToDb = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { problem } = req.body;
    if (!problem) {
      const error = new ApiError(
        400,
        "Problem statement are not here",
        problem
      );

      throw error;
    }
    const createProblem = await prisma;
    return "";
  } catch (error) {
    res.send(error);
  }
});

export default addProblemToDb;
