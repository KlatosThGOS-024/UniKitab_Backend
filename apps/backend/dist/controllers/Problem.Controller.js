"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProblemFromDb = exports.addProblemToDb = void 0;
const express_1 = require("express");
const asyncHandler_1 = __importDefault(require("../utils/asyncHandler"));
const db_1 = __importDefault(require("@repo/db"));
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const addProblemToDb = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { problemNumber, problemId, inputText1, inputText2, inputText3, title, testCases, examples, difficulty, handlerFunc, likesCount, dislikeCount, starterFunctionName, } = req.body;
        console.log(req.body);
        // if (!problem) {
        //   const error = new ApiError(
        //     400,
        //     "Problem statement are not here",
        //     problem
        //   );
        //   throw error;
        // }
        const createProblem = yield db_1.default.problem.create({
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
                problemTitle: title,
                difficulty,
                examples: {
                    create: examples.map((example) => ({
                        inputText: example.inputText,
                        outputText: example.outputText,
                        explanation: example.explanation,
                        problemId: problemId, // Ensure problemId is included
                    })),
                },
                testCases: {
                    create: testCases.map((testCase) => ({
                        input: testCase.input,
                        output: testCase.output,
                        problemId: problemId, // Ensure problemId is included
                    })),
                },
            },
        });
        console.log(express_1.response);
    }
    catch (error) {
        res.send(error);
    }
}));
exports.addProblemToDb = addProblemToDb;
const getProblemFromDb = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("gekkjk");
        const getProblem = yield db_1.default.problem.findMany({
            where: {},
        });
        console.log(getProblem);
        res.send(new ApiResponse_1.default(201, getProblem, "Successfully get the data"));
    }
    catch (error) {
        res.send(error);
    }
}));
exports.getProblemFromDb = getProblemFromDb;
