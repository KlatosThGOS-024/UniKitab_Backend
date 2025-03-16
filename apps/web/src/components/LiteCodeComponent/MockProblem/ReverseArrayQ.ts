// import { Difficulty, Example, Problem } from "./types/types";

// const examples: Example[] = [
//   {
//     inputText: "[1, 2, 3, 4, 5]",
//     outputText: "[5, 4, 3, 2, 1]",
//     explanation: "Reversing the array elements.",
//   },
//   {
//     inputText: "[10, 20, 30]",
//     outputText: "[30, 20, 10]",
//     explanation: "Reversing order of elements.",
//   },
// ];

// const starterCodeReverseArray = `function reverseArray(arr) {
//   return arr.reverse();
// }`;

// const handlerReverseArray = (fn: (arr: number[]) => number[]) => {
//   try {
//     const testCases = [
//       { input: [1, 2, 3, 4, 5], output: [5, 4, 3, 2, 1] },
//       { input: [10, 20, 30], output: [30, 20, 10] },
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//       const result = fn(testCases[i].input);
//       if (JSON.stringify(result) !== JSON.stringify(testCases[i].output)) {
//         throw new Error(`Test case ${i} failed.`);
//       }
//     }
//     return true;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };

// const testCases = [
//   { input: [1, 2, 3, 4, 5], output: [5, 4, 3, 2, 1] },
//   { input: [10, 20, 30], output: [30, 20, 10] },
// ];

// export const reverseArrayQ: Problem = {
//   problemNumber: 1,
//   problemId: "reverse-array",
//   title: "Reverse the Array",
//   inputText1: "You are given an array of integers. Your task is to reverse the order of elements in the array.",
//   inputText2: "The function should return a new array with elements in reversed order.",
//   inputText3: "Example: Input: [1, 2, 3, 4, 5] → Output: [5, 4, 3, 2, 1].",
//   difficulty: Difficulty.Easy,
//   likesCount: 120,
//   dislikeCount: 5,
//   examples,
//   testCases,
//   handlerFunc: handlerReverseArray,
//   starterFunctionName: starterCodeReverseArray,
// };
import { Difficulty, Example, Problem, TestCases } from "@repo/types";

const examples: Example[] = [
  {
    problemId: "reverse-array",
    inputText: "[1, 2, 3, 4, 5]",
    outputText: "[5, 4, 3, 2, 1]",
    explanation: "Reversing the array elements.",
  },
  {
    problemId: "reverse-array",
    inputText: "[10, 20, 30]",
    outputText: "[30, 20, 10]",
    explanation: "Reversing order of elements.",
  },
];

const starterCodeReverseArray = `function reverseArray(arr) {
  return arr.reverse();
}`;

const handlerReverseArray = (fn: (arr: number[]) => number[]) => {
  try {
    const testCases = [
      { input: [1, 2, 3, 4, 5], output: [5, 4, 3, 2, 1] },
      { input: [10, 20, 30], output: [30, 20, 10] },
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i].input);
      if (JSON.stringify(result) !== JSON.stringify(testCases[i].output)) {
        throw new Error(`Test case ${i} failed.`);
      }
    }
    return true;
  } catch (error: any) {
    throw new Error(error);
  }
};

const testCases: TestCases[] = [
  {
    problemId: "reverse-array",
    input: [1, 2, 3, 4, 5],
    output: [5, 4, 3, 2, 1],
  },
  { problemId: "reverse-array", input: [10, 20, 30], output: [30, 20, 10] },
];

export const reverseArrayQ: [Problem] = [
  {
    problemNumber: "1111",
    problemId: "reverse-array",
    title: "Reverse the Array",
    inputText1:
      "You are given an array of integers. Your task is to reverse the order of elements in the array.",
    inputText2:
      "The function should return a new array with elements in reversed order.",
    inputText3: "Example: Input: [1, 2, 3, 4, 5] → Output: [5, 4, 3, 2, 1].",
    difficulty: Difficulty.Easy,
    likesCount: "120",
    dislikeCount: "5",
    examples,
    testCases,
    handlerFunc: handlerReverseArray,
    starterFunctionName: starterCodeReverseArray,
  },
];
