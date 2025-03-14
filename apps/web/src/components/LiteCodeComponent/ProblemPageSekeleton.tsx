"use client";
import React, { useEffect, useState } from "react";
import Split from "react-split";
import { MdOutlineDescription } from "react-icons/md";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { FaCode } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { IoCodeWorking } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";

import { BsFullscreen } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import {
  Example,
  Problem,
  ResponseExample,
  ResponseProblem,
  ResponseTestCases,
} from "@repo/types";
import { TfiControlPlay } from "react-icons/tfi";
import { FaCloudArrowUp } from "react-icons/fa6";

export const LeftSideProblemDescription = ({
  ResponseProblemProp,
  ResponseExampleProp,
}: {
  ResponseProblemProp: ResponseProblem;
  ResponseExampleProp: ResponseExample[];
}) => {
  // const problem = response[0];
  // const examples = response[1];
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   if (problem && examples) {
  //     setIsLoading(false);
  //   }
  // });

  return (
    <section>
      <div>
        <div
          className="bg-[#262626]  overflow-auto  h-full  rounded-lg border-white  
        border-opacity-65 border-[0.1px] w-full "
        >
          <h2
            className="bg-[#333333]  py-2 rounded-xl flex gap-1 
          px-3 rounded-b-none items-center"
          >
            <span>
              <MdOutlineDescription className="fill-blue-500 w-[27px] h-[27px]" />
            </span>
            <span>Description</span>
          </h2>
          <div className="mt-[28px] pb-[28px] px-[28px]">
            <div>
              <h2 className=" text-white text-[38px] font-[600] mb-2">
                {ResponseProblemProp.problemNumber}.{ResponseProblemProp.title}
              </h2>
              <span className="text-green-500 bg-[#3C3C3C] px-3 py-[2px] rounded-full">
                {ResponseProblemProp.difficulty}
              </span>
            </div>
            <div className="description mt-[21px] space-y-[18px]">
              <p className="d1  text-white text-[20px] ">
                {ResponseProblemProp.inputText1}
              </p>
              <p className="d2 text-white text-[20px] ">
                {ResponseProblemProp.inputText2}
              </p>
              <p className="d3 text-white text-[20px]">
                {ResponseProblemProp.inputText3}
              </p>
            </div>
            <div>
              <div className=" flex  flex-col justify-center">
                <div className="flex flex-col w-full ">
                  {ResponseExampleProp.map((value, index) => {
                    return (
                      <div key={index} className="mb-6 ">
                        <h2 className="text-lg font-semibold  text-white text-[22px]">
                          Example {index + 1}:
                        </h2>
                        <div className="px-3 mt-3 w-full mx-[18px]  border-y-0 border-r-0  border-l-slate-400 border-[1px]">
                          <p className="flex items-center gap-3">
                            <span className="font-medium text-white text-[24px]">
                              Input:
                            </span>
                            <span className="text-[#A8A8A8] text-[18px]">
                              {value.inputText}
                            </span>
                          </p>
                          <p className="flex items-center gap-3">
                            <span className="font-medium  text-white text-[22px]">
                              Output:
                            </span>
                            <span className="text-[#A8A8A8] text-[18px]">
                              {value.outputText}
                            </span>
                          </p>
                          <p className=" text-sm ">
                            <span className="text-[#A8A8A8] text-[18px]">
                              <span className="text-white text-[22px]">
                                Explanation
                              </span>
                              {value.explanation}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="my-6">
                  <h2 className="text-lg font-semibold mb-6 text-white text-[22px]">
                    Constraints:
                  </h2>
                  <ul className="list-disc space-y-3 list-inside text-[#C0C2C5]">
                    <li className="bg-[#353535] rounded-lg px-5 py-1 w-fit">
                      2 ≤ nums.length ≤ 10⁴
                    </li>
                    <li className="bg-[#353535] rounded-lg px-5 py-1 w-fit">
                      -10⁹ ≤ nums[i] ≤ 10⁹
                    </li>
                    <li className="bg-[#353535] rounded-lg px-5 py-1 w-fit">
                      -10⁹ ≤ target ≤ 10⁹
                    </li>
                    <li className="bg-[#353535] rounded-lg px-5 py-1 w-fit">
                      Only one valid answer exists.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-[600]  text-white text-[22px]">
                    Follow-up:
                  </h2>
                  <p className="text-white ">
                    Can you come up with an algorithm that is less than O(n²)
                    time complexity?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RightSideCodeEditor = ({
  ResponseTestCasesProp,
  starterFunctionName,
}: {
  ResponseTestCasesProp: ResponseTestCases[];
  starterFunctionName: any;
}) => {
  console.log(starterFunctionName);
  const [isLoading, setIsLoading] = useState(true);
  const [caseCount, setCaseCount] = useState(0);

  const testCases = ResponseTestCasesProp.map((testCase) =>
    JSON.stringify(testCase.input || testCase.input, null, 2)
  );

  const targetCases = ResponseTestCasesProp.map((testCase) =>
    JSON.stringify(testCase.input.target || testCase.output, null, 2)
  );

  const [inputValue, setInputValue] = useState(testCases[0]);
  const [targetValue, setTargetValue] = useState(targetCases[0]);

  const handleCaseChange = (index: number) => {
    setCaseCount(index);
    setInputValue(testCases[index]);
    setTargetValue(targetCases[index]);
  };

  const [userCode, setUserCode] = useState(starterFunctionName);

  const onChangeHandler = (e: any) => {
    try {
      const cb = new Function(`return ${userCode}`)();
      //@ts-ignore
      const result = eval(response[0].handlerFunc)(cb);

      alert(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (testCases) {
      setIsLoading(false);
    }
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Split
        className="w-full h-[calc(100vh)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={10}
      >
        <div className="bg-[#1E1E1E] overflow-auto">
          <h2
            className="bg-[#333333] py-2 rounded-xl flex gap-1
px-3 rounded-b-none items-center "
          >
            <span>
              <FaCode className="fill-green-500 w-[27px] h-[27px]" />
            </span>
            <span className="text-white text-lg font-[600]">Code</span>
          </h2>
          <div
            className=" py-2 items-center  rounded-xl justify-between px-[18px]
               flex gap-2 border-b-[1px] border-gray-500
   rounded-b-none  "
          >
            <div className="flex items-center">
              <span
                className="hover:bg-[#2F2F2F] rounded-md p-1 px-3 
                flex items-center text-white text-lg  font-[600]"
              >
                Python
                <MdKeyboardArrowDown className="w-[32px] fill-[#949494] h-[32px]" />
              </span>

              <span
                className="hover:bg-[#2F2F2F] text-white text-lg 
                 font-[600] rounded-md  p-1 px-3"
              >
                Auto
              </span>
            </div>
            <div className=" flex items-center gap-[12px]">
              <IoIosSettings className="w-[28px] cursor-pointer  fill-[#fff9] h-[28px] " />
              <BsFullscreen className="w-[24px] cursor-pointer  fill-[#fff9] h-[28px] " />
            </div>
          </div>
          <CodeMirror
            value={starterFunctionName}
            onChange={setUserCode}
            height="100%"
            lang="javascript"
            extensions={[javascript()]}
            style={{ fontSize: 16 }}
            theme={vscodeDark}
          />
        </div>
        <div className="relative bg-[#262626]">
          <div>
            <div
              className="bg-[#333333]  py-2 rounded-xl flex gap-4 
    px-3 rounded-b-none items-center"
            >
              {" "}
              <h2 className="flex items-center gap-1 ">
                <span>
                  <TiTick className="fill-green-500 w-[27px] h-[27px]" />
                </span>
                <span className="text-white text-lg font-[600]">Testcase </span>
              </h2>{" "}
              <h2 className="flex items-center gap-1 border-l-[2px] border-gray-600 px-2">
                <span>
                  <IoCodeWorking className="fill-green-500 w-[27px] h-[27px]" />
                </span>
                <span className="text-white text-lg font-[600]">
                  Check testresult{" "}
                </span>
              </h2>
            </div>
            <div className=" overflow-y-scroll">
              <div className="py-[28px] px-[48px]  ">
                <div className="flex items-center gap-3">
                  <div className="cases flex gap-2">
                    {testCases.map((_, index) => (
                      <p
                        key={index}
                        onClick={() => handleCaseChange(index)}
                        className={`caseclass ${
                          caseCount === index ? "active" : ""
                        }`}
                      >
                        <span>Case {index + 1}</span>
                      </p>
                    ))}
                  </div>
                  <div className="add-case">
                    <IoIosAdd
                      className="w-[32px] h-[32px] cursor-pointer"
                      onClick={() => console.log("Add a new case logic here")}
                    />
                  </div>
                </div>
                <div className="mt-[18px] space-y-5">
                  {/* Input */}
                  <div>
                    <span className="font-[600] text-[#9EA0A3] ml-2">
                      nums =
                    </span>
                    <input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="bg-[#333333] w-full font-[600] py-3 rounded-xl text-white text-[18px] px-5"
                    />
                  </div>

                  {/* Target */}
                  <div>
                    <span className="font-[600] text-[#9EA0A3] ml-2">
                      target =
                    </span>
                    <p className="bg-[#333333] font-[600] py-3 rounded-xl flex gap-4 text-white text-[18px] px-5 items-center">
                      {targetValue}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-2  right-3">
                <div className="flex gap-3">
                  <div
                    className="flex items-center gap-x-2   rounded-lg cursor-pointer bg-[#2F2F2F] 
                            px-[21px] "
                  >
                    <TfiControlPlay
                      className="w-[42px]  fill-[#fff9]
                               h-[42px] "
                    />

                    <span className="text-white">Run</span>
                  </div>{" "}
                  <div
                    className="flex items-center  gap-x-2   rounded-lg cursor-pointer bg-[#2F2F2F] 
                            px-[21px] "
                  >
                    <FaCloudArrowUp
                      className="w-[21px]  fill-green-500
                               h-[21px] "
                    />

                    <span onClick={onChangeHandler} className="text-green-500">
                      Sbumit
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Split>
    </div>
  );
};
