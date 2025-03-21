import { Router } from "express";
import {
  generateProblemArray,
  parseDSASheet,
} from "../controllers/AiResponse.controller";
const aiRouter = Router();
aiRouter.route("/generate-Qarray").post(generateProblemArray);
aiRouter.route("/get-answer-bysheet").post(parseDSASheet);

export default aiRouter;
