"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.problemRouter = void 0;
const express_1 = require("express");
const Problem_Controller_1 = require("../controllers/Problem.Controller");
const problemRouter = (0, express_1.Router)();
exports.problemRouter = problemRouter;
problemRouter.route("/createQ").post(Problem_Controller_1.addProblemToDb);
problemRouter.route("/getQ").get(Problem_Controller_1.getProblemFromDb);
