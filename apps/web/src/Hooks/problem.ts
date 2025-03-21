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

    const handler = handlerFunc.toString();

    const response = await fetch(
      "http://localhost:8000/api/v1/problem/problem-add",
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
          handlerFunc: handler.replace(/[^\x00-\x7F]/g, ""),
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
export async function CreateQ(QuestionArray: string[]) {
  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/problem/get-answer-byproblem",
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
          handlerFunc: handler.replace(/[^\x00-\x7F]/g, ""),
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
