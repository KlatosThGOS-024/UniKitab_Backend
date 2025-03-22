// import { Difficulty, Example, Problem } from "./types/types";

// // Example test cases for the robBankDay problem
// const examples: Example[] = [
//   {
//     inputText: "security = [5, 3, 3, 3, 5, 6, 2], time = 2",
//     outputText: "[2, 3]",
//     explanation:
//       "On day 2, we have security[0] >= security[1] >= security[2] <= security[3] <= security[4]. On day 3, we have security[1] >= security[2] >= security[3] <= security[4] <= security[5]. No other days satisfy this condition, so days 2 and 3 are the only good days to rob the bank.",
//   },
//   {
//     inputText: "security = [1, 1, 1, 1, 1], time = 0",
//     outputText: "[0, 1, 2, 3, 4]",
//     explanation:
//       "Since time equals 0, every day is a good day to rob the bank, so return every day.",
//   },
//   {
//     inputText: "security = [1, 2, 3, 4, 5, 6], time = 2",
//     outputText: "[]",
//     explanation:
//       "No day has 2 days before it that have a non-increasing number of guards. Thus, no day is a good day to rob the bank, so return an empty list.",
//   },
// ];

// // Starter code for robBankDay function
// const starterCodeRobBankDay = `function robBankDay(security, time) {
//   // Write your code here
// };`;

// // Handler function to validate test cases
// const handlerRobBankDay = (
//   fn: (security: number[], time: number) => number[]
// ) => {
//   try {
//     const testCases = [
//       {
//         input: { security: [5, 3, 3, 3, 5, 6, 2], time: 2 },
//         output: [2, 3],
//       },
//       {
//         input: { security: [1, 1, 1, 1, 1], time: 0 },
//         output: [0, 1, 2, 3, 4],
//       },
//       {
//         input: { security: [1, 2, 3, 4, 5, 6], time: 2 },
//         output: [],
//       },
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//       const { security, time } = testCases[i].input;
//       const result = fn(security, time);
//       const resultArray = result;
//       if (JSON.stringify(resultArray) !== JSON.stringify(testCases[i].output)) {
//         console.log(resultArray);
//         throw new Error(
//           `Error at index ${i}: expected ${JSON.stringify(
//             testCases[i].output
//           )}, got ${JSON.stringify(resultArray)}`
//         );
//       }
//     }
//     return true;
//   } catch (error: any) {
//     console.log("robBankDay handler function error");
//     throw new Error(error);
//   }
// };

// // Test cases for robBankDay problem
// const testCases = [
//   {
//     input: { security: [1, 2, 3, 4, 5], time: 2 },
//     output: [],
//   },
//   {
//     input: { security: [1, 2, 3, 4], time: 0 },
//     output: [0, 1, 2, 3],
//   },
//   {
//     input: { security: [5, 3, 3, 3, 5, 6, 2], time: 2 },
//     output: [2, 3],
//   },
// ];

// // The final problem object for robBankDay problem
// export const robBankDayProblem: Problem = {
//   problemNumber: 1,
//   problemId: "a8b328d5-dc7b-4fcf-b1db-97cd575032f7",
//   title: "Bank Robbery Problem - robBankDay",
//   inputText1:
//     "Given the number of guards on duty on each day and a time variable, determine the best days to rob the bank.",
//   inputText2:
//     "Return all the days where there are at least `time` days before and after the day in question with guards in a non-increasing and non-decreasing order.",
//   difficulty: Difficulty.Medium,
//   likesCount: 0,
//   dislikeCount: 0,
//   examples,
//   testCases: testCases,
//   handlerFunc: handlerRobBankDay,
//   starterFunctionName: starterCodeRobBankDay,
// };
