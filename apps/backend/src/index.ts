import express from "express";
import router from "./app";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import cors from "cors";

dotenv.config({
  path: "./.env",
});
/////////////////////////////////////
const port = process.env.PORT;
const app = express();

/////////////////////////////////////
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded());
app.use(router);
/////////////////////////////////////

/////////////////////////////////////
app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
});
