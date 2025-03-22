// import { Difficulty, Example, Problem } from "./types/types";

// const examples: Example[] = [
//   {
//     inputText: 's = "PAYPALISHIRING", numRows = 3',
//     outputText: '"PAHNAPLSIIGYIR"',
//     explanation: "P   A   H   N\nAPLSIIG\nY   I   R",
//   },
//   {
//     inputText: 's = "PAYPALISHIRING", numRows = 4',
//     outputText: '"PINALSIGYAHRPI"',
//     explanation: "P     I    N\nA   L S  I G\nY A   H R\nP     I",
//   },
//   {
//     inputText: 's = "A", numRows = 1',
//     outputText: '"A"',
//     explanation: "A",
//   },
// ];

// const starterCodeZigZag = `function convert(s, numRows) {
//     // Write your code here
// };`;

// const handlerZigZag = (fn: any) => {
//   try {
//     const inputs = [
//       { s: "PAYPALISHIRING", numRows: 3 },
//       { s: "PAYPALISHIRING", numRows: 4 },
//       { s: "A", numRows: 1 },
//     ];
//     const answers = ["PAHNAPLSIIGYIR", "PINALSIGYAHRPI", "A"];

//     for (let i = 0; i < inputs.length; i++) {
//       const result = fn(inputs[i].s, inputs[i].numRows);
//       if (result !== answers[i]) {
//         throw new Error(
//           `Error at index ${i}: expected ${answers[i]}, got ${result}`
//         );
//       }
//     }
//     return true;
//   } catch (error: any) {
//     console.log("convert handler function error");
//     throw new Error(error);
//   }
// };

// const testCases = [
//   {
//     input: {
//       s: "PAYPALISHIRING",
//       numRows: 3,
//     },
//     output: {
//       answer: "PAHNAPLSIIGYIR",
//     },
//   },
//   {
//     input: {
//       s: "PAYPALISHIRING",
//       numRows: 4,
//     },
//     output: {
//       answer: "PINALSIGYAHRPI",
//     },
//   },
//   {
//     input: {
//       s: "A",
//       numRows: 1,
//     },
//     output: {
//       answer: "A",
//     },
//   },
// ];

// export const zigZagConversion: Problem = {
//   problemId: "51204888-9af6-4e7d-9baf-81926c78edf0", // Replace with a unique ID
//   problemNumber: 6, // Replace with the problem number
//   title: "ZigZag Conversion",
//   inputText1:
//     'The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)',
//   inputText2: "P   A   H   N\nAPLSIIG\nY   I   R",
//   inputText3: 'And then read line by line: "PAHNAPLSIIGYIR"',
//   difficulty: Difficulty.Medium,
//   likesCount: 0,
//   dislikeCount: 0,
//   examples,
//   testCases: testCases,
//   handlerFunc: handlerZigZag,
//   starterFunctionName: starterCodeZigZag,
// };
