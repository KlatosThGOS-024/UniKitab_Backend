import { Problem } from "@/components/LiteCodeComponent/MockProblem/types/types";

export const getQuestions = async (problemId: string) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/questions/question-get?problemId=${problemId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export async function addQtoDb(problem: Problem) {
  try {
    const questionData = problem;

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
      starterFunction,
      handlerFunc,
      examples,
    } = questionData;

    const handler = handlerFunc.toString();

    const response = await fetch(
      "http://localhost:8000/api/v1/questions/question-add",
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
          starterFunction,
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
export const createQuestionArray = async (message: string) => {
  try {
    const url = `http://localhost:8000/api/v1/ai/generate-Qarray
`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        problemDescriptions: message,
      }),
    });

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const createQuestion = async (question: string, id: string) => {
  try {
    const url = `http://localhost:8000/api/v1/ai/get-answer-bysheet
`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dsaQ: question,
        id: id,
      }),
    });

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const saveQuestionArray = async (
  documentId: string,
  questions: {
    id: number;
    questionTitle: string;
    difficulty: "Easy" | "Medium" | "Hard";
    category: string;
    status: boolean;
    solution: string;
  }[]
) => {
  try {
    console.log(documentId, questions);
    const url = "http://localhost:8000/api/v1/questions/question-addArray";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        documentId,
        questions,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error saving questions:", error);
    return { success: false, message: "Failed to save questions", error };
  }
};
export const getQuestionsByDocumentId = async (documentId: string) => {
  try {
    const url = `http://localhost:8000/api/v1/questions/getQuestionArray?documentId=${documentId}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch questions: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return { success: false, message: "Failed to fetch questions", error };
  }
};
export const getAllDocs = async () => {
  try {
    const url = "http://localhost:8000/api/v1/questions/documents";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch documents: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Failed to fetch documents", error };
  }
};
