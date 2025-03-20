import { Request, Response } from "express";

import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asynchHandler";
import { ApiResponse } from "../utils/ApiResponse";

const getAnswer = asyncHandler(async (req: Request, res: Response) => {
  const getQuestion = req.body.getQuestion as string;
  console.log(getQuestion);
  if (getQuestion == "") {
    res
      .status(400)
      .send(ApiError.badRequest(false, "Provide Question", getQuestion));
    return;
  }
  try {
    const api = process.env.AiAPI;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `
                 Find the maximum and minimum element in an array
Array Find the "Kth" max and min element of an array
                
                ${getQuestion}`,
              },
            ],
          },
        ],
      }),
    });
    const data = await response.json();

    const getAnswer = data.candidates[0].content.parts[0].text;
    res
      .status(200)
      .send(new ApiResponse(200, getAnswer, "Successfully get the answer"));
  } catch (error: any) {
    res
      .status(400)
      .send(new ApiError("Something went wrong", 400, error.error));
    return;
  }
});

export { getAnswer };
