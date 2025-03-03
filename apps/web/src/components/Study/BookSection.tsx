"use client";
import { addFileUrl } from "@/functions/docs/file";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  cnBooks,
  csaBooks,
  dbmsBooks,
  DSbooks,
} from "../../../public/constants";

interface bookArray {
  subject: string;
  title: string;
  imgSrc: string;
  pdfPath?: string;
}
[];
const CrousalBooks = ({ bookArray }: { bookArray: any }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative flex flex-col gap-9">
      {bookArray.map((value: bookArray, index: number) => (
        <div key={index} className="flex gap-4 w-[60%]">
          <a
            onClick={async () => {
              if (value.pdfPath) {
                const response = await fetch(value.pdfPath);
                const blob = await response.blob();
                const generatedUrl = URL.createObjectURL(blob);
                dispatch(addFileUrl(generatedUrl));
              }
            }}
            href="/pdf/pdf-ai"
            target="_blank"
            rel="noopener noreferrer"
            className=" h-[50%] w-[50%] cursor-pointer"
          >
            <img className="w-full  h-full" src={value.imgSrc} />
          </a>
          <div>
            <h2 className="text-[18px]">Category: </h2>
            <p className="text-[28px] font-[600]">By Author:</p>
            <p className=" text-[#76787B] text-[24px]">Book Description</p>
          </div>
        </div>
      ))}
    </div>
  );
};
interface bookArray {
  subject: string;
  title: string;
  imgSrc: string;
  pdfPath?: string;
}
[];
export const BookSection = () => {
  const [subjectHeader, setSubjectHeader] = useState("null");
  const [subjectArray, setSubjectArray] = useState<bookArray[]>(dbmsBooks);

  return (
    <section className="">
      <div className="w-full relative">
        <img
          className="w-full xl:h-[496px]"
          src="https://www.studypool.com/images/notebank/backgrounds/heading-bg.jpg"
        />
        <div className="space-y-2 absolute top-[10%] left-[25%]">
          <h3 className="text-[26px] text-[#C3EBFC]">The Notebank</h3>
          <p className="text-[18px] text-gray-600">
            Your go-to place for Computer Science PYQs, PDFs, and
            books—everything you need to study, all in one spot!
          </p>
        </div>
        <div className="xl:w-[996px] mt-7 max-lg:hidden absolute top-[20%] left-[25%] rounded-lg max-xl:w-[496px] flex items-center bg-[#FFFFFF] border-[1px] hover:shadow-[#69D4F3] hover:shadow-sm">
          <input
            className="placeholder:text-gray-500 placeholder:text-[18px] w-full text-black px-4 py-5 hover:outline-[#69D4F3] rounded-lg outline-none bg-[#FFFFFF]"
            placeholder="Search study resources"
          />
          <div className="px-4 border-l-[1px] rounded-l-none py-2">
            <IoSearchOutline className="font-[600] w-[21px] h-[21px] text-[#69D4F3]" />
          </div>
        </div>
      </div>
      <div className="absolute right-0 mt-2 w-[200px]  shadow-lg rounded-lg p-2">
        <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
          <ul className=" absolute text-center left-0.5 top-7 space-y-2 bg--300 w-full bg- text-black  ">
            <li
              onClick={() => {
                setSubjectHeader("Data Structure");
                setSubjectArray(DSbooks);
              }}
              className="bg-gray-200 hover:opacity-90 cursor-pointer"
            >
              Data Structure
            </li>
            <li
              onClick={() => {
                setSubjectHeader("Computer Architecture");
                setSubjectArray(csaBooks);
              }}
              className="bg-gray-200 hover:opacity-90 cursor-pointer"
            >
              Computer Architecture
            </li>
            <li
              onClick={() => {
                setSubjectHeader("Computer Networks");
                setSubjectArray(cnBooks);
              }}
              className="bg-gray-200 hover:opacity-90 cursor-pointer"
            >
              Computer Networks
            </li>
            <li
              onClick={() => {
                setSubjectHeader(" Database Management System");
                setSubjectArray(dbmsBooks);
              }}
              className="bg-gray-200 hover:opacity-90 cursor-pointer"
            >
              Database Management System
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[1080px] max-lg:w-[700px] max-xl:w-[900px]  max-md:w-[500px] mx-auto z-30">
        {" "}
        <div>
          <h2 className="text-center text-[24px] mb-6">Data Structure</h2>
          <CrousalBooks bookArray={subjectArray} />
        </div>
        {/* <div>
          <h2 className="text-center text-[24px] mb-3">
            Database Management System
          </h2>
          <CrousalBooks bookArray={dbmsBooks} />
        </div>{" "}
        <div>
          <h2 className="text-center text-[24px] mb-3">
            Computer Architecture
          </h2>
          <CrousalBooks bookArray={csaBooks} />
        </div>
        <div>
          <h2 className="text-center text-[24px] mb-3">Computer Networks</h2>
          <CrousalBooks bookArray={cnBooks} />
        </div>{" "} */}
      </div>
    </section>
  );
};
{
  /**/
}
