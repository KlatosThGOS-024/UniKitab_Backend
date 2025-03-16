import express from "express";
// import userRouter from "./routes/user.routes";
import aiRouter from "./routes/Ai.routes";
import { problemRouter } from "./routes/problem.routes";

const router = express();

// router.use("/api/v1/user", userRouter);
router.use("/api/v1/ai", aiRouter);
router.use("/api/v1/problem", problemRouter);

export default router;
