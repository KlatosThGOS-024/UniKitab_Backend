import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

import Link from "next/link";

import { UploadSheet } from "./UploadSheet";
interface problemType {
  problemId?: string;
  status: boolean;
  title: string;
  Difficulty: string;
  Solution: string;
  Categorie: string;
}

const problems: problemType[] = [];
export default problems;

const Problems = () => {
  return (
    <div className="overflow-x-auto rounded-xl ">
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
    <section
      className=" h-screen
    bg-[#1A1A1A]"
    >
      <div className="w-[1496px] mx-auto grid xl:grid-cols-2 max-lg:grid-rows-2 gap-2">
        {problems.length > 0 && (
          <div
            className="max-w-[1020px] py-[28px] w-full 
       mx-auto "
          >
            <Problems />
          </div>
        )}
        <div className=" place-items-center">
          <UploadSheet />
        </div>
      </div>
    </section>
  );
};
