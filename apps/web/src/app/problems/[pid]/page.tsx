// "use client";

// import { reverseArrayQ } from "@/components/LiteCodeComponent/MockProblem/ReverseArrayQ";
// import {
//   LeftSideProblemDescription,
//   RightSideCodeEditor,
// } from "@/components/LiteCodeComponent/ProblemPageSekeleton";
// import { getQuestions } from "@/Hooks/problem";

// import {
//   Difficulty,
//   Example,
//   ResponseExample,
//   ResponseProblem,
//   ResponseTestCases,
//   TestCases,
// } from "@repo/types";

// import { useSearchParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import Split from "react-split";
// export type Problem = [
//   {
//     problemNumber: number;
//     problemId: string;
//     title: string;
//     inputText1: string;
//     inputText2?: string;
//     inputText3?: string;
//     difficulty: Difficulty;
//     likesCount: number;
//     dislikeCount: number;

//     handlerFunc: ((fn: any) => boolean) | string;
//     starterFunctionName: string;
//   },
//   examples: Example[],
//   testCases: TestCases[],
// ];
// const ProblemPageSekeleton = () => {
//   // const defaultProblem: [
//   //   ResponseProblem,
//   //   ResponseTestCases[],
//   //   ResponseExample[],
//   // ] = [
//   //   {
//   //     problemNumber: 0,
//   //     problemId: "",
//   //     title: "",
//   //     inputText1: "",
//   //     inputText2: undefined,
//   //     inputText3: undefined,
//   //     difficulty: Difficulty.Easy,
//   //     likesCount: 0,
//   //     dislikeCount: 0,
//   //     handlerFunc: "",
//   //     starterFunctionName: "",
//   //   },
//   //   [
//   //     /* default values for ResponseExample[] */
//   //   ],
//   //   [
//   //     /* default values for ResponseTestCases[] */
//   //   ],
//   // ];
//   const fakeProblem: Problem = [
//     {
//       problemNumber: 1,
//       problemId: "sum_two_numbers",
//       title: "Sum of Two Numbers",
//       inputText1: "Number ahjfghjfghfghfghfghfghfghfghfghgf",
//       inputText2: "Number thfghfghfghfhgb",
//       inputText3: undefined,
//       difficulty: Difficulty.Medium,
//       likesCount: 120,
//       dislikeCount: 5,
//       handlerFunc: "sumTwoNumbers",
//       starterFunctionName: "sum",
//     },

//     [
//       {
//         inputText: "2 3",
//         outputText: "5",
//         explanation: "Adding 2 and 3 results in 5.",
//         id: "",
//         problemId: "",
//       },
//       {
//         inputText: "10 20",
//         outputText: "30",
//         explanation: "Adding 10 and 20 results in 30.",
//         id: "",
//         problemId: "",
//       },
//     ],
//     [
//       {
//         input: "11",
//         output: "2",
//         id: "",
//         problemId: "",
//       },
//       {
//         input: "5 7",
//         output: "12",
//         id: "",
//         problemId: "",
//       },
//     ],
//   ];

//   const [selectedProblem, setSelectedProblem] =
//     useState<Problem>(reverseArrayQ);

//   const [isLoading, setSetIsLoading] = useState(false);
//   const params = useSearchParams();
//   const problemId = params.get("problemId") || "";
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const data = await getQuestions(problemId);
//   //       setSelectedProblem(data.data);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     } finally {
//   //       setSetIsLoading(false);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   const responseData = selectedProblem;

//   if (!selectedProblem) {
//     return <div>Problem data not available.</div>;
//   }
//   return (
//     <div>
//       <Split className=" split  h-screen bg-[#111]">
//         <div className=" my-1 overflow-auto mx-1">
//           <LeftSideProblemDescription
//             ResponseExampleProp={responseData[2]}
//             ResponseProblemProp={responseData[0]}
//           />
//         </div>
//         <div>
//           <RightSideCodeEditor
//             response={responseData[1]}
//             starterFunctionName={responseData[0].starterFunctionName}
//           />
//         </div>
//       </Split>
//     </div>
//   );
// };

// const ProblemPage = () => {
//   return (
//     <section>
//       <div>
//         <ProblemPageSekeleton />
//       </div>
//     </section>
//   );
// };
// export default ProblemPage;
"use client";

import { reverseArrayQ } from "@/components/LiteCodeComponent/MockProblem/ReverseArrayQ";
import {
  LeftSideProblemDescription,
  RightSideCodeEditor,
} from "@/components/LiteCodeComponent/ProblemPageSekeleton";
import { getQuestions } from "@/Hooks/problem";

import {
  Difficulty,
  Example,
  Problem,
  ResponseExample,
  ResponseProblem,
  ResponseTestCases,
  TestCases,
} from "@repo/types";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Split from "react-split";

const ProblemPageSekeleton = () => {
  const defaultProblem: [
    ResponseProblem,
    ResponseExample[],
    ResponseTestCases[],
  ] = [
    {
      problemNumber: 0,
      problemId: "",
      title: "",
      inputText1: "",
      inputText2: undefined,
      inputText3: undefined,
      difficulty: Difficulty.Easy,
      likesCount: 0,
      dislikeCount: 0,
      handlerFunc: "",
      starterFunctionName: "",
    },
    [
      /* default values for ResponseExample[] */
    ],
    [
      /* default values for ResponseTestCases[] */
    ],
  ];
  // const fakeProblem: Problem = [
  //   {
  //     problemNumber: 1,
  //     problemId: "sum_two_numbers",
  //     title: "Sum of Two Numbers",
  //     inputText1: "Number ahjfghjfghfghfghfghfghfghfghfghgf",
  //     inputText2: "Number thfghfghfghfhgb",
  //     inputText3: undefined,
  //     difficulty: Difficulty.Medium,
  //     likesCount: 120,
  //     dislikeCount: 5,
  //     handlerFunc: "sumTwoNumbers",
  //     starterFunctionName: "sum",
  //   },

  //   [
  //     {
  //       inputText: "2 3",
  //       outputText: "5",
  //       explanation: "Adding 2 and 3 results in 5.",
  //       id: "",
  //       problemId: "",
  //     },
  //     {
  //       inputText: "10 20",
  //       outputText: "30",
  //       explanation: "Adding 10 and 20 results in 30.",
  //       id: "",
  //       problemId: "",
  //     },
  //   ],
  //   [
  //     {
  //       input: "11",
  //       output: "2",
  //       id: "",
  //       problemId: "",
  //     },
  //     {
  //       input: "5 7",
  //       output: "12",
  //       id: "",
  //       problemId: "",
  //     },
  //   ],
  // ];

  const [selectedProblem, setSelectedProblem] =
    useState<[Problem]>(reverseArrayQ);

  const [isLoading, setSetIsLoading] = useState(false);
  const params = useSearchParams();
  const problemId = params.get("problemId") || "";
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getQuestions(problemId);
  //       setSelectedProblem(data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setSetIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const responseData = selectedProblem;

  if (!selectedProblem) {
    return <div>Problem data not available.</div>;
  }
  return (
    <div>
      <Split className=" split  h-screen bg-[#111]">
        <div className=" my-1 overflow-auto mx-1">
          <LeftSideProblemDescription
            ResponseExampleProp={responseData[0].examples}
            ResponseProblemProp={responseData[0]}
          />
        </div>
        <div>
          <RightSideCodeEditor
            ResponseTestCasesProp={responseData[0].testCases}
            starterFunctionName={responseData[0].starterFunctionName}
          />
        </div>
      </Split>
    </div>
  );
};

const ProblemPage = () => {
  return (
    <section>
      <div>
        <ProblemPageSekeleton />
      </div>
    </section>
  );
};
export default ProblemPage;
