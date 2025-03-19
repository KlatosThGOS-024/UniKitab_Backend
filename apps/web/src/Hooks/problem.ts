import { problemData } from "@/components/LiteCodeComponent/MockProblem/ReverseArrayQ";

export const getQuestions = async (problemId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/problems?problemId=${problemId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export async function addQtoDb() {
  try {
    console.log("fsjfshfjskdhfkj");

    const questionData = problemData[0];
    const {
      problemNumber,
      problemId,
      problemTitle,
      inputText1,
      inputText2,
      inputText3,
      difficulty,
      dislikeCount,
      likesCount,
      testCases,
      starterFunctionName,
      handlerFunc,
      examples,
    } = questionData;

    // Convert handlerFunc to string if necessary
    const handler = handlerFunc.toString();

    // Send the data to your backend API
    const response = await fetch(
      "http://localhost:8000/api/v1/problem/createQ",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problemNumber,
          problemId,
          problemTitle,
          inputText1,
          inputText2,
          inputText3,
          difficulty,
          likesCount,
          dislikeCount,
          handlerFunc: handler.replace(/[^\x00-\x7F]/g, ""), // Remove non-ASCII characters
          starterFunctionName,
          examples,
          testCases,
        }),
      }
    );

    console.log(response);
    console.log("New Problem created:");
  } catch (error) {
    console.error("Error while adding problem:", error);
  }
}
