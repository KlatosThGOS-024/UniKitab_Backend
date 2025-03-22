"use client";

import {
  Difficulty,
  Problem,
  ResponseExample,
  ResponseProblem,
  ResponseTestCases,
} from "@/components/LiteCodeComponent/MockProblem/types/types";
import {
  LeftSideProblemDescription,
  RightSideCodeEditor,
} from "@/components/LiteCodeComponent/ProblemPageSekeleton";

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

  const [selectedProblem, setSelectedProblem] = useState<[Problem]>();

  const [isLoading, setSetIsLoading] = useState(false);
  const params = useSearchParams();
  const problemId = params.get("problemId") || "";

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
