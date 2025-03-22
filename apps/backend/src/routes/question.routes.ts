import { Router } from "express";

import {
  getProblemFromDb,
  addProblemToDb,
} from "../controllers/question.controller";

const QuestionDbRouter = Router();

QuestionDbRouter.route("/question-add").post(addProblemToDb);

QuestionDbRouter.route("/question-get").get(getProblemFromDb);
//userRouter.route("/login").post(userRegister);
// userRouter.route("/logout").delete(userRegister);
// userRouter.route("/get-profile").get(userRegister);
export default QuestionDbRouter;
