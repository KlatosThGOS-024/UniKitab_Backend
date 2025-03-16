import { Router } from "express";
import {
  addProblemToDb,
  getProblemFromDb,
} from "../controllers/Problem.Controller";

const problemRouter = Router();

problemRouter.route("/createQ").post(addProblemToDb);

problemRouter.route("/getQ").get(getProblemFromDb);
export { problemRouter };
