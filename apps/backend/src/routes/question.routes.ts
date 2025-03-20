import { Router } from "express";

import addProblemToDb from "../controllers/question.controller";

const QuestionDbRouter = Router();

QuestionDbRouter.route("/problem-add").post(addProblemToDb);
// userRouter.route("/login").post(userRegister);
// userRouter.route("/logout").delete(userRegister);
// userRouter.route("/get-profile").get(userRegister);
export default QuestionDbRouter;
