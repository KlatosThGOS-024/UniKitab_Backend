"use client";
import React, { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { RiArrowUpDownLine } from "react-icons/ri";

import Link from "next/link";

import FileUpload from "./UploadSheet";
interface problemType {
  id: number;

  questionTitle: string;
  difficulty: string;

  category: string;
}

import { CiSearch } from "react-icons/ci";

const Problems = ({ arrayOfQs }: { arrayOfQs: any }) => {
  let arrayOfqs: any = [];

  try {
    if (arrayOfQs) {
      arrayOfqs = JSON.parse(arrayOfQs);
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    arrayOfqs = [];
  }

  return (
    <div className="overflow-x-auto rounded-xl ">
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
              {arrayOfqs &&
                arrayOfqs.map((value: problemType, index: number) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-[#2C2C2D]" : "bg-[#111]"
                    } text-white cursor-pointer `}
                  >
                    <td className="text-[18px] font-[500] px-4 py-4">
                      <Link
                        href={`/problems/${value.questionTitle}?problemId=${value.id}`}
                      >
                        {value.questionTitle}
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

export const TopBarCompOfProblems = () => {
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
