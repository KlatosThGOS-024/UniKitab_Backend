import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asynchHandler";
import prisma from "@repo/db";

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
) => {
  return plainPassword === hashedPassword;
};

declare global {
  namespace Express {
    interface Request {
      user?: User;
      token?: string;
    }
  }
}

export const verifyCredentials = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    const user = await prisma.user.findFirst({
      where: { username },
    });

    if (!user) {
      res
        .status(401)
        .json(ApiError.unauthorized("Invalid username or password"));
      return;
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      res
        .status(401)
        .json(ApiError.unauthorized("Invalid username or password"));
    }

    req.user = user;

    next();
  }
);
