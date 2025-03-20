// import { Request, Response } from "express";
// import { asyncHandler } from "../utils/asynchHandler";
// import {
//   runTimeUserSchemaSignUp,
//   runTimeUserSchemaLogin,
// } from "../types/user.types";
// import { ApiError } from "../utils/ApiError";
// import prismaClient from "@repo/db";
// import { ApiResponse } from "../utils/ApiResponse";

// const userRegister = asyncHandler(async (req: Request, res: Response) => {
//   const userDetails = runTimeUserSchemaSignUp.safeParse(req.body);
//   if (!userDetails.success) {
//     throw ApiError.badRequest(
//       "Please provide correct credentials",
//       userDetails.error
//     );
//   }
//   const userExist = await prismaClient.user.findFirst({});
//   if (userExist) {
//     throw ApiError.badRequest("User already present by this email");
//   }
//   const user = await prismaClient.user.create({
//     data: {
//       firstName: userDetails.data.fullName.firstName,
//       lastName: userDetails.data.fullName.lastName,
//       email: userDetails.data.email,
//       password: userDetails.data.password,
//     },
//   });
//   res.status(201).send(ApiResponse.success("success", user));
// });
// const userLogin = asyncHandler(async (req: Request, res: Response) => {
//   const userDetails = runTimeUserSchemaLogin.safeParse(req.body);
//   if (!userDetails.success) {
//     throw ApiError.badRequest(
//       "Please provide correct credentials",
//       userDetails.error
//     );
//   }
//   const userExist = await prismaClient.user.findFirst({
//     where: {
//       email: userDetails.data.email,
//     },
//   });
//   if (!userExist) {
//     throw ApiError.unauthorized("User Doesnt existed email");
//   }

//   res.status(200).send(ApiResponse.success("success", userExist));
// });
// const getProfile = asyncHandler(async (req: Request, res: Response) => {
//   const user = req.user;
//   res
//     .status(200)
//     .send(ApiResponse.success("successfully get the profile", user));
// });
// const userLogout = asyncHandler(async (req: Request, res: Response) => {
//   res
//     .clearCookie("accessToken")
//     .status(200)
//     .send(ApiResponse.success("successfully logout"));
// });
// export { userRegister, userLogin, userLogout, getProfile };
