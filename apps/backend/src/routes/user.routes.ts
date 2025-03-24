import { Router } from "express";
import {
  getProfile,
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/user.controller";

import { verifyCredentials } from "../middlewares/auth";

const userRouter = Router();

userRouter.route("/signUp").post(userRegister);
userRouter.route("/login").post(verifyCredentials, userLogin);
userRouter.route("/logout").delete(userLogout);
userRouter.route("/get-profile").get(getProfile);
export default userRouter;
