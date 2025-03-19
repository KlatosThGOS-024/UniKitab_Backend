import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

import Link from "next/link";
const problems = [
  {
    problemId: "be511e3c-2936-4bf4-84f9-fd984e513250",
    status: true,
    title: "Two-Sum",
    Categorie: "String/Array",
    Difficulty: "Easy",
    Solution: "Solution",
  },
  {
    problemId: "41204888-9af6-4e7d-9baf-81926c78edf4",
    status: true,
    title: "Greatest Common Divisor of Strings",
    Categorie: "String/Array",
    Difficulty: "Easy",
    Solution: "Solution",
  },
  {
    problemId: "51204888-9af6-4e7d-9baf-81926c78edf4",
    status: true,
    title: "Delete Middle Node OF LL",
    Categorie: "String/LinkedList",
    Difficulty: "Medium",
    Solution: "Solution",
  },
  {
    problemId: "51204888-9af6-4e7d-9baf-81926c78edf3",
    status: true,
    title: "Bank Robbery Problem",
    Categorie: "String/Array",
    Difficulty: "Easy",
    Solution: "Solution",
  },
  {
    problemId: "a8b328d5-dc7b-4fcf-b1db-97cd575032f7",
    status: false,
    title: "Bank Robbery Problem 2",
    Categorie: "String/Array",
    Difficulty: "Easy",
    Solution: "Solution",
  },
  {
    problemId: "51204888-9af6-4e7d-9baf-81926c78edf0",
    status: false,
    title: "ZigzagConversioNproblem",
    Categorie: "String/Array",
    Difficulty: "Medium",
    Solution: "Solution",
  },
  {
    problemId: "51204888-9af6-4e7d-9baf-81926c78edf6",
    status: false,
    title: "Phone Number problem",
    Categorie: "String/Array",
    Difficulty: "Medium",
    Solution: "Solution",
  },
];
export default problems;

interface problemType {
  problemId?: string;
  status: boolean;
  title: string;
  Difficulty: string;
  Solution: string;
  Categorie: string;
}

const Problems = () => {
  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="table-auto w-full  rounded-xl border-collapse border border-gray-600">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-gray-600 px-4 py-2">Status</th>
            <th className="border border-gray-600 px-4 py-2">Title</th>
            <th className="border border-gray-600 px-4 py-2">Category</th>
            <th className="border border-gray-600 px-4 py-2">Difficulty</th>
            <th className="border border-gray-600 px-4 py-2">Solution</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((value: problemType, index) => {
            return (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-[#2C2C2D]   " : "bg-[#111] "
                } text-white cursor-pointer hover:bg-[#261e1e] `}
              >
                <td className="text-[18px] font-[500] px-4 py-4">
                  {value.status && (
                    <BsCheck2Circle className="text-green-500 w-6 h-6 " />
                  )}
                </td>
                <td className="text-[18px] font-[500] px-4 py-4">
                  <Link
                    href={`/problems/${value.title}?problemId=${value.problemId}`}
                  >
                    {value.title}
                  </Link>
                </td>
                <td className="text-[18px] font-[500] px-4 py-4">
                  {value.Categorie}
                </td>
                <td
                  className={`text-[18px] font-[500] px-4 py-4 ${
                    value.Difficulty === "Easy"
                      ? "text-green-500"
                      : value.Difficulty === "Medium"
                        ? "text-yellow-500"
                        : "text-red-500"
                  } }`}
                >
                  {value.Difficulty}
                </td>
                <td className="text-[18px] font-[500] px-4 py-4">
                  {value.Solution}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const TopBarCompOfProblems = () => {
  return (
    <section className="w-full   bg-[#1A1A1A]">
      <div className="max-w-[1020px] py-[28px] w-full h-screen mx-auto ">
        <Problems />
      </div>
    </section>
  );
};
