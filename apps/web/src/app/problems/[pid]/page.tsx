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
import { IRootState } from "@/store/store";

import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Split from "react-split";

const ProblemPageSekeleton = () => {
  const defaultProblem: Problem = {
    problemNumber: " 0",
    problemId: "",
    problemTitle: "",
    inputText1: "",
    inputText2: "",
    inputText3: "",
    difficulty: Difficulty.Easy,
    likesCount: 0,
    dislikeCount: 0,
    handlerFunc: "",
    starterFunctionName: "",
    examples: [],
    testCases: [],
  };

  const [selectedProblem, setSelectedProblem] =
    useState<Problem>(defaultProblem);
  const selectQuestionById = useSelector(
    (state: IRootState) => state.QuestionReducer
  );

  const [isLoading, setSetIsLoading] = useState(false);
  const params = useSearchParams();
  const problemId = params.get("problemId") || "";
  const Qdata = selectQuestionById.find((item: Problem) => {
    if (problemId === item.problemId) {
      setSelectedProblem(item);
    }
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const responseData = selectedProblem;

  if (!selectedProblem) {
    return <div>Problem data not available.</div>;
  }
  return (
    <div>
      /*{" "}
      <Split className=" split  h-screen bg-[#111]">
        <div className=" my-1 overflow-auto mx-1">
          <LeftSideProblemDescription
            ResponseExampleProp={responseData.examples}
            ResponseProblemProp={responseData}
          />
        </div>
        <div>
          <RightSideCodeEditor
            ResponseTestCasesProp={responseData.testCases}
            starterFunctionName={responseData.starterFunctionName}
          />
        </div>
      </Split>{" "}
      */ grgdgdrgdg
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
