"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import userRouter from "./routes/user.routes";
const Ai_routes_1 = __importDefault(require("./routes/Ai.routes"));
const problem_routes_1 = require("./routes/problem.routes");
const router = (0, express_1.default)();
// router.use("/api/v1/user", userRouter);
router.use("/api/v1/ai", Ai_routes_1.default);
router.use("/api/v1/problem", problem_routes_1.problemRouter);
exports.default = router;
