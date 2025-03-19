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
const asyncHandler_1 = __importDefault(require("../utils/asyncHandler"));
const db_1 = __importDefault(require("@repo/db"));
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const addProblemToDb = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { problemNumber, problemId, problemTitle, inputText1, inputText2, inputText3, testCases, examples, difficulty, handlerFunc, likesCount, dislikeCount, starterFunctionName, } = req.body;
        // Validate the required fields
        // In your validation, you're checking for title
        if (!problemNumber ||
            !problemId ||
            !problemTitle ||
            !testCases ||
            !examples ||
            !difficulty) {
            res.send(new ApiResponse_1.default(400, null, "Missing required fields"));
            return;
        }
        // Log incoming data for debugging (remove in production)
        console.log("Received data:", req.body);
        // Create the problem and its related data
        // Create the problem and its related data
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
                problemTitle,
                difficulty,
                examples: {
                    create: examples.map((example) => ({
                        inputText: example.inputText,
                        outputText: example.outputText,
                        explanation: example.explanation,
                        // Remove the problem connect field here
                    })),
                },
                testCases: {
                    create: testCases.map((testCase) => ({
                        input: testCase.input,
                        output: testCase.output,
                        // Remove the problem connect field here
                    })),
                },
            },
        });
        // Send success response
        res.send(new ApiResponse_1.default(201, createProblem, "Successfully added the problem"));
    }
    catch (error) {
        // Log the error for debugging (remove in production)
        console.error("Database error:", error);
        // Send error response with detailed message
        const errorMessage = error instanceof Error
            ? error.message
            : "An unexpected error occurred while adding the problem.";
        res.send(new ApiResponse_1.default(500, null, errorMessage));
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
