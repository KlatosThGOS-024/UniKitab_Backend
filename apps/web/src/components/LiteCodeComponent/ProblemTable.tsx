"use client";

import React, { useEffect, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { RiArrowUpDownLine } from "react-icons/ri";
import Link from "next/link";

import { CiSearch } from "react-icons/ci";
import { createQuestion } from "@/Hooks/AiApi";
import { Problem } from "./MockProblem/types/types";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store/store";
import { addQ } from "@/functions/dsaQuestions/question";
import { addQtoDb, getQuestions } from "@/Hooks/problem";

import FileUpload from "./UploadSheet";
export interface problemType {
  id: string;

  questionTitle: string;
  difficulty: string;

  category: string;
}

// const Problems = ({ arrayOfQs }: { arrayOfQs: any }) => {
//   const [problem, setProblem] = useState<Problem>();
//   const selectQuestionById = useSelector(
//     (state: IRootState) => state.QuestionReducer
//   );
//   const dispatch = useDispatch();

//   const QuestionHandler = async (title: string, id: string) => {
//     const Q_is_Present = selectQuestionById.find((item: Problem) => {
//       if (id === item.problemId) {
//         return item;
//       }
//     });
//     const Q_is_Present_InDb = await getQuestions(id);

//     if (Q_is_Present) {
//       return Q_is_Present;
//     }
//     const response = await createQuestion(title, id);
//     dispatch(addQ(response[0]));
//     setProblem(response[0]);
//   };
//   useEffect(() => {
//     if (problem) {
//       addQtoDb(problem);
//     }
//   }, [problem]);
//   return (
//     <div className="overflow-x-auto rounded-xl ">
//       <div>
//         <div
//           className=" w-full mb-3 mt-[64px] gap-3
//           flex items-center
//        justify-between"
//         >
//           <div
//             className="flex w-full items-center
//            py-1 px-3 gap-3 border-[1px] rounded-lg"
//           >
//             <CiSearch className="w-9 h-9" />
//             <input
//               className="w-full px-3  py-[7px]
//                outline-none placeholder:text-[18px] placeholder:text-white rounded-lg"
//               placeholder="search question"
//             ></input>
//           </div>
//           <div
//             className="flex gap-4 items-center
//           max-md:flex-col"
//           >
//             <select
//               className="py-2 px-4 rounded-mg max-md:w-full bg-gray-500
//            bg- hover:bg-gray-500 border border-gray-400 rounded"
//             >
//               <option>All levels</option>
//               <option>Easy</option>
//               <option>Medium</option>
//               <option>Hard</option>
//             </select>
//             <select
//               className="py-2 px-4 rounded-mg
//  bg-gray-500 max-md:w-full
//            bg- hover:bg-gray-500 border border-gray-400 rounded"
//             >
//               <option>All Status</option>
//               <option>Solved</option>
//               <option>Attemtped</option>
//               <option>Not Start</option>
//             </select>
//             <select
//               className="py-2 px-4  max-md:w-full rounded-mg  bg-gray-500
//            bg- hover:bg-gray-500 border border-gray-400 rounded"
//             >
//               <option>All Categories</option>
//               <option>Array</option>
//               <option>Medium</option>
//               <option>Hard</option>
//             </select>
//           </div>
//         </div>
//         <div>
//           <table className="table-auto w-full rounded-xl border-collapse border border-gray-600">
//             <thead>
//               <tr className="bg-[#1A1A1A] text-white">
//                 <th className="border border-gray-600 px-4 py-2">
//                   <div className="flex gap-2 items-center">
//                     <span>Title</span>
//                     <RiArrowUpDownLine />
//                   </div>
//                 </th>
//                 <th className="border border-gray-600 px-4 py-2">
//                   <div className="flex gap-2 items-center">
//                     <span>Difficulty</span>
//                     <RiArrowUpDownLine />
//                   </div>
//                 </th>
//                 <th className="border border-gray-600 px-4 py-2">
//                   <div className="flex gap-2 items-center">
//                     <span>Category</span>
//                     <RiArrowUpDownLine />
//                   </div>
//                 </th>
//                 <th className="border border-gray-600 px-4 py-2">
//                   <div className="flex gap-2 items-center">
//                     <span>Status</span>
//                     <RiArrowUpDownLine />
//                   </div>
//                 </th>
//                 <th className="border border-gray-600 px-4 py-2">
//                   <div className="flex gap-2 items-center">
//                     <span>Solution</span>
//                     <RiArrowUpDownLine />
//                   </div>
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {arrayOfQs &&
//                 arrayOfQs.map((value: problemType, index: number) => (
//                   <tr
//                     key={index}
//                     className={`${
//                       index % 2 === 0 ? "bg-[#2C2C2D]" : "bg-[#111]"
//                     } text-white cursor-pointer `}
//                   >
//                     <td className="text-[18px] font-[500] px-4 py-4">
//                       {/* <Link
//                         legacyBehavior
//                         href={`/problems/${value.questionTitle}?problemId=${value.id}`}
//                       > */}
//                       <a
//                         onClick={() => {
//                           QuestionHandler(value.questionTitle, value.id);
//                         }}
//                       >
//                         {value.questionTitle}
//                       </a>
//                     </td>
//                     <td
//                       className={`text-[18px] font-[500] px-4 py-4 ${
//                         value.difficulty === "Easy"
//                           ? "text-green-500"
//                           : value.difficulty === "Medium"
//                             ? "text-yellow-500"
//                             : "text-red-500"
//                       }`}
//                     >
//                       {value.difficulty}
//                     </td>
//                     <td className="text-[18px] font-[500] px-4 py-4">
//                       {value.category}
//                     </td>
//                     <td className="text-[18px] font-[500] px-4 py-4">
//                       {<BsCheck2Circle className="text-green-500 w-6 h-6" />}
//                     </td>
//                     <td className="text-[18px] font-[500] px-4 py-4">sol</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

export interface problemType {
  id: string;
  questionTitle: string;
  difficulty: string;
  category: string;
}

const Problems = ({ arrayOfQs }: { arrayOfQs: any }) => {
  const [problem, setProblem] = useState<Problem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Use a more descriptive name for your selector
  const questionsInStore = useSelector(
    (state: IRootState) => state.QuestionReducer
  );

  const dispatch = useDispatch();

  // Log the Redux state on component mount and whenever it changes
  useEffect(() => {
    console.log("Current questions in Redux store:", questionsInStore);
  }, [questionsInStore]);

  const QuestionHandler = async (title: string, id: string) => {
    try {
      setLoading(true);
      setError(null);

      console.log("Checking if question exists in Redux store, ID:", id);
      const questionInStore = questionsInStore.find(
        (item: Problem) => item.problemId === id
      );

      if (questionInStore) {
        console.log("Question found in Redux store:", questionInStore);
        setProblem(questionInStore);
        setLoading(false);
        return questionInStore;
      }

      console.log("Checking if question exists in DB, ID:", id);
      const questionInDb = await getQuestions(id);
      console.log("DB check result:", questionInDb);

      if (questionInDb && questionInDb.length > 0) {
        console.log("Question found in DB:", questionInDb[0]);
        // Make sure to add it to Redux if it's in DB but not in Redux
        dispatch(addQ(questionInDb[0]));
        setProblem(questionInDb[0]);
        setLoading(false);
        return questionInDb[0];
      }

      console.log("Question not found, creating new question:", title, id);
      const response = await createQuestion(title, id);
      console.log("API response for new question:", response);

      if (!response || !response[0]) {
        throw new Error("Failed to create question");
      }

      console.log("Dispatching to Redux:", response[0]);
      dispatch(addQ(response[0]));

      console.log("Setting problem state:", response[0]);
      setProblem(response[0]);
      setLoading(false);
      return response[0];
    } catch (err) {
      console.error("Error in QuestionHandler:", err);
      //@ts-ignore
      setError(err.message || "An error occurred");
      setLoading(false);
      return null;
    }
  };

  // Triggered when problem state changes
  useEffect(() => {
    if (problem) {
      console.log("Problem state changed, saving to DB:", problem);
      addQtoDb(problem)
        .then(() => console.log("Successfully saved to DB"))
        .catch((err) => console.error("Error saving to DB:", err));
    }
  }, [problem]);

  return (
    <div className="overflow-x-auto rounded-xl">
      {/* Show loading and error states */}
      {loading && <div className="p-4 text-yellow-500">Loading...</div>}
      {error && <div className="p-4 text-red-500">Error: {error}</div>}

      <div>
        <div
          className=" w-full mb-3 mt-[64px] gap-3 
          flex items-center
       justify-between"
        >
          <div
            className="flex w-full items-center
           py-1 px-3 gap-3 border-[1px] rounded-lg"
          >
            <CiSearch className="w-9 h-9" />
            <input
              className="w-full px-3  py-[7px]
               outline-none placeholder:text-[18px] placeholder:text-white rounded-lg"
              placeholder="search question"
            ></input>
          </div>
          <div
            className="flex gap-4 items-center 
          max-md:flex-col"
          >
            <select
              className="py-2 px-4 rounded-mg max-md:w-full bg-gray-500
           bg- hover:bg-gray-500 border border-gray-400 rounded"
            >
              <option>All levels</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
            <select
              className="py-2 px-4 rounded-mg  
 bg-gray-500 max-md:w-full
           bg- hover:bg-gray-500 border border-gray-400 rounded"
            >
              <option>All Status</option>
              <option>Solved</option>
              <option>Attemtped</option>
              <option>Not Start</option>
            </select>
            <select
              className="py-2 px-4  max-md:w-full rounded-mg  bg-gray-500
           bg- hover:bg-gray-500 border border-gray-400 rounded"
            >
              <option>All Categories</option>
              <option>Array</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
        </div>
        <div>
          <table className="table-auto w-full rounded-xl border-collapse border border-gray-600">
            <thead>
              <tr className="bg-[#1A1A1A] text-white">
                <th className="border border-gray-600 px-4 py-2">
                  <div className="flex gap-2 items-center">
                    <span>Title</span>
                    <RiArrowUpDownLine />
                  </div>
                </th>
                <th className="border border-gray-600 px-4 py-2">
                  <div className="flex gap-2 items-center">
                    <span>Difficulty</span>
                    <RiArrowUpDownLine />
                  </div>
                </th>
                <th className="border border-gray-600 px-4 py-2">
                  <div className="flex gap-2 items-center">
                    <span>Category</span>
                    <RiArrowUpDownLine />
                  </div>
                </th>
                <th className="border border-gray-600 px-4 py-2">
                  <div className="flex gap-2 items-center">
                    <span>Status</span>
                    <RiArrowUpDownLine />
                  </div>
                </th>
                <th className="border border-gray-600 px-4 py-2">
                  <div className="flex gap-2 items-center">
                    <span>Solution</span>
                    <RiArrowUpDownLine />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {arrayOfQs &&
                arrayOfQs.map((value: problemType, index: number) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-[#2C2C2D]" : "bg-[#111]"
                    } text-white cursor-pointer `}
                  >
                    <td className="text-[18px] font-[500] px-4 py-4">
                      <Link
                        legacyBehavior
                        href={`/problems/${value.questionTitle}?problemId=${value.id}`}
                      >
                        <a
                          onClick={() => {
                            QuestionHandler(value.questionTitle, value.id);
                          }}
                        >
                          {value.questionTitle}
                        </a>
                      </Link>
                    </td>

                    <td
                      className={`text-[18px] font-[500] px-4 py-4 ${
                        value.difficulty === "Easy"
                          ? "text-green-500"
                          : value.difficulty === "Medium"
                            ? "text-yellow-500"
                            : "text-red-500"
                      }`}
                    >
                      {value.difficulty}
                    </td>
                    <td className="text-[18px] font-[500] px-4 py-4">
                      {value.category}
                    </td>
                    <td className="text-[18px] font-[500] px-4 py-4">
                      {<BsCheck2Circle className="text-green-500 w-6 h-6" />}
                    </td>
                    <td className="text-[18px] font-[500] px-4 py-4">sol</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
const LiteCodeBody = () => {
  const [arrayOfQs, setArrayOfQs] = useState("");
  return (
    <section
      className=" h-screen bg-[#1A1A1A]
    "
    >
      <div className="max-lg:grid-cols-1 lg:px-[96px] px-[38px] grid grid-cols-2 ">
        <div className="">
          <FileUpload setArrayOfQs={setArrayOfQs} />
        </div>
        <div className=" ">
          <Problems arrayOfQs={arrayOfQs} />
        </div>
      </div>
    </section>
  );
};
export default LiteCodeBody;
