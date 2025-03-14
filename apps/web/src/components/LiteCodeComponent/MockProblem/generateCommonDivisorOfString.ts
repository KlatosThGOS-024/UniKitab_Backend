import assert from "assert";
import { Difficulty, Example, Problem } from "./types/types";

const examples: Example[] = [
  {
    inputText: 'str1 = "ABCABC", str2 = "ABC"',
    outputText: '"ABC"',
    explanation:
      'The greatest common divisor of "ABCABC" and "ABC" is "ABC" because "ABCABC" is "ABC" repeated 2 times and "ABC" is itself repeated 1 time.',
  },
  {
    inputText: 'str1 = "ABABAB", str2 = "ABAB"',
    outputText: '"AB"',
    explanation:
      'The greatest common divisor of "ABABAB" and "ABAB" is "AB" because "ABABAB" is "AB" repeated 3 times and "ABAB" is "AB" repeated 2 times.',
  },
  {
    inputText: 'str1 = "LEET", str2 = "CODE"',
    outputText: '""',
    explanation:
      'There is no common divisor for "LEET" and "CODE", so the result is an empty string.',
  },
];

const starterCodeGCDStrings = `function gcdOfStrings(str1, str2) {
  // Write your code here
};`;

const handlerGCDStrings = (fn: any) => {
  try {
    const str1 = ["ABCABC", "ABABAB", "LEET"];
    const str2 = ["ABC", "ABAB", "CODE"];
    const answers = ["ABC", "AB", ""];

    for (let i = 0; i < str1.length; i++) {
      const result = fn(str1[i], str2[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("gcdOfStrings handler function error");
    throw new Error(error);
  }
};

const testCases = [
  {
    input: {
      str1: "ABCABC",
      str2: "ABC",
    },
    output: {
      answer: "ABC",
    },
  },
  {
    input: {
      str1: "ABABAB",
      str2: "ABAB",
    },
    output: {
      answer: "AB",
    },
  },
  {
    input: {
      str1: "LEET",
      str2: "CODE",
    },
    output: {
      answer: "",
    },
  },
];

export const gcdOfStrings: Problem = {
  problemNumber: 1,
  problemId: "41204888-9af6-4e7d-9baf-81926c78edf4",

  title: "Greatest Common Divisor of Strings",
  inputText1:
    "Given two strings str1 and str2, return the greatest common divisor of str1 and str2.",
  inputText2:
    "The greatest common divisor of two strings is the largest string that divides both str1 and str2.",
  inputText3: "If there is no such string, return an empty string.",
  difficulty: Difficulty.Easy,
  likesCount: 0,
  dislikeCount: 0,
  examples,
  testCases: testCases,
  handlerFunc: handlerGCDStrings,
  starterFunctionName: starterCodeGCDStrings,
};
