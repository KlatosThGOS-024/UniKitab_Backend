// import { Problem, Example, TestCases, Difficulty } from "@repo/types";

// // Fake data for Example model
// const exampleData: Example[] = [
//   {
//     problemId: "reverse-array1",
//     inputText: "[1, 2, 3, 4, 5]",
//     outputText: "[5, 4, 3, 2, 1]",
//     explanation: "Reversing the array elements.",
//     img: "https://example.com/image1.png", // Optional image URL
//   },
//   {
//     problemId: "reverse-array1",
//     inputText: "[10, 20, 30]",
//     outputText: "[30, 20, 10]",
//     explanation: "Reversing the order of elements.",
//     img: "https://example.com/image2.png", // Optional image URL
//   },
// ];

// // Fake data for TestCases model
// const testCaseData: TestCases[] = [
//   {
//     problemId: "reverse-array1",
//     input: "[1, 2, 3, 4, 5]",
//     output: "[5, 4, 3, 2, 1]",
//   },
//   {
//     problemId: "reverse-array1",
//     input: "[10, 20, 30]",
//     output: "[30, 20, 10]",
//   },
// ];

// // Fake data for Problem model
// export const problemData: Problem[] = [
//   {
//     problemNumber: "1111",
//     problemId: "reverse-array1",
//     problemTitle: "Reverse the Array",
//     inputText1:
//       "You are given an array of integers. Your task is to reverse the order of elements in the array.",
//     inputText2:
//       "The function should return a new array with elements in reversed order.",
//     inputText3: "Example: Input: [1, 2, 3, 4, 5] → Output: [5, 4, 3, 2, 1].",
//     difficulty: Difficulty.Easy,
//     likesCount: 120,
//     dislikeCount: 5,
//     examples: exampleData,
//     testCases: testCaseData,
//     handlerFunc:
//       "(fn) => { const testCases = [{ input: [1, 2, 3], output: [3, 2, 1] }, { input: [10, 20], output: [20, 10] }]; for (let i = 0; i < testCases.length; i++) { const result = fn(testCases[i].input); if (JSON.stringify(result) !== JSON.stringify(testCases[i].output)) { throw new Error(`Test case ${i} failed.`); } } return true; }",
//     starterFunctionName: "function reverseArray(arr) { return arr.reverse(); }",
//   },
// ];

// console.log("Fake Problem Data:", problemData);
