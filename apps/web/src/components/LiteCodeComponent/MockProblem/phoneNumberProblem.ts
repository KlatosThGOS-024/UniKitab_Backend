import { Difficulty, Example, Problem } from "./types/types"; // Assuming this is your type definition file

const examples: Example[] = [
  {
    inputText: `"23"`,
    outputText: `["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`,
    explanation: "Explanation:",
  },
  {
    inputText: `"2"`,
    outputText: `["a", "b", "c"]`,
    explanation: "Explanation:",
  },
  {
    inputText: `""`,
    outputText: `[]`,
    explanation: "Explanation:",
  },
];

const starterCodeLetterCombinations = `
function letterCombinations(digits) {
    // Write your code here
}
`;

const phoneMap = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

const handlerLetterCombinations = (fn: any) => {
  try {
    //@ts-ignore
    const arraysEqual = (a, b) => {
      if (a === b) return true;
      if (a == null || b == null) return false;
      if (a.length !== b.length) return false;

      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    };

    const digitsList = ["23", "2", ""];
    const answers = [
      ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
      ["a", "b", "c"],
      [],
    ];

    for (let i = 0; i < digitsList.length; i++) {
      const result = fn(digitsList[i]);
      //Deep comparison needed for arrays
      if (!arraysEqual(result, answers[i])) {
        throw new Error(
          `Error at index ${i}: expected ${answers[i]}, got ${result}`
        );
      }
    }
    return true;
  } catch (error: any) {
    console.log("letterCombinations handler function error");
    throw new Error(error);
  }
};

const testCases = [
  {
    input: { digits: "23" },
    output: { answer: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] },
  },
  {
    input: { digits: "2" },
    output: { answer: ["a", "b", "c"] },
  },
  {
    input: { digits: "" },
    output: { answer: [] },
  },
];

export const letterCombinations: Problem = {
  problemId: "51204888-9af6-4e7d-9baf-81926c78edf6", // Generate a unique ID
  problemNumber: 17, // Or whatever number you want to assign
  title: "Letter Combinations of a Phone Number",
  inputText1:
    "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.",
  inputText2: "Return the answer in any order.",
  inputText3: "The mapping of digit to letters is given below.",
  difficulty: Difficulty.Medium,
  likesCount: 0,
  dislikeCount: 0,
  examples,
  testCases,
  handlerFunc: handlerLetterCombinations,
  starterFunctionName: starterCodeLetterCombinations,
};
