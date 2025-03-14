import assert from "assert";
import { Difficulty, Example, Problem } from "./types/types";

const examples: Example[] = [
  {
    inputText: "nums = [2,7,11,15], target = 9",
    outputText: "[0,1]",
    explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
  },
  {
    inputText: "nums = [3,2,4], target = 6",
    outputText: "[1,2]",
    explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
  },
  {
    inputText: " nums = [3,3], target = 6",
    outputText: "[0,1]",
    explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
  },
];
const starterCodeTwoSum = `function twoSum(nums,target){
    // Write your code here
  };`;
const handlerTwoSum = (fn: any) => {
  try {
    const nums = [
      [2, 7, 11, 15],
      [3, 2, 4],
      [3, 3],
    ];

    const targets = [9, 6, 6];
    const answers = [
      [0, 1],
      [1, 2],
      [0, 1],
    ];

    for (let i = 0; i < nums.length; i++) {
      const result = fn(nums[i], targets[i]);
      if (result.toString() != answers[i].toString()) {
        throw new Error(
          `Error at index ${i}: expected ${answers[i]}, got ${result}`
        );
      }
    }
    return true;
  } catch (error: any) {
    console.log("twoSum handler function error");
    throw new Error(error);
  }
};
const testCases = [
  {
    input: {
      nums: [2, 7, 11, 15],
      target: 9,
    },
    output: {
      answer: [0, 1],
    },
  },
  {
    input: {
      nums: [3, 2, 4],
      target: 6,
    },
    output: {
      answer: [1, 2],
    },
  },
  {
    input: {
      nums: [3, 3],
      target: 6,
    },
    output: {
      answer: [0, 1],
    },
  },
];
export const twoSum: Problem = {
  problemId: "be511e3c-2936-4bf4-84f9-fd984e513250",
  problemNumber: 1,
  title: "Two sum",
  inputText1:
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  inputText2:
    "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
  inputText3: "You can return the answer in any order.",
  difficulty: Difficulty.Easy,
  likesCount: 0,
  dislikeCount: 0,
  examples,
  testCases: testCases,
  handlerFunc: handlerTwoSum,
  starterFunctionName: starterCodeTwoSum,
};
