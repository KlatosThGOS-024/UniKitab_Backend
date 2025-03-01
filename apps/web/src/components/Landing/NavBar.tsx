"use client";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosOptions } from "react-icons/io";
import PdfToText from "@/pdfGeneration/PdfToText";

const SearchBar = () => {
  return (
    <div
      className=" rounded-lg  flex items-center bg-[#FFFFFF] border-[1px]
     hover:shadow-[#69D4F3] hover:shadow-sm  "
    >
      <input
        className="placeholder:text-gray-500 px-4 py-3 rounded-lg outline-none bg-[#FFFFFF]"
        placeholder="Search study resources"
      ></input>
      <div className=" px-4 border-l-[1px] rounded-l-none py-2">
        <IoSearchOutline className=" w-[21px] h-[21px] text-[#69D4F3]" />
      </div>
    </div>
  );
};

export const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const showMenuModal = () => {
    setShowModal(!showModal);
  };
  return (
    <section>
      <div className="flex items-center relative justify-between px-2 py-[8px] ">
        <div className="flex items-center px-4 gap-5">
          <h2
            className=" text-[#C34326] hover:scale-110  text-[28px]
          transition-all duration-200 ease-in-out"
          >
            Uni<span className="text-[#A4A4A4]">Kitab</span>
          </h2>
          <div className="">
            <SearchBar />
          </div>
        </div>
        <div className=" items-center px-4 max-md:hidden  flex gap-6 ">
          <ul className="flex gap-7 items-center text-[18px]">
            <li className="hover:text-[#69D4F3] font-[500] text-[#423e3e]">
              <a href="/document">Sell Docs</a>
            </li>
            <li className="hover:text-[#69D4F3] font-[500] text-[#423e3e]">
              Educators
            </li>
            <li className=":block  hover:text-[#69D4F3]">Login</li>{" "}
          </ul>
          <button
            className=" rounded-full transition-all duration-150 ease-out
             max-lg:hidden lg:block  px-4 text-[18px] font-[500]  py-2 bg-[#EC497D] text-white
           hover:bg-[#645656] hover:text-[#EC497D]"
          >
            Sign Up
          </button>
        </div>

        <div className="max-md:block hidden">
          <IoIosOptions
            onClick={showMenuModal}
            className="w-[28px] cursor-pointer h-[28px]"
          />
          {showModal && (
            <div className="bg-white z-20  absolute left-0 -bottom-[188px] right-0  ">
              <ul className="flex flex-col text-start gap-7 px-3 text-[18px]">
                <li className="hover:text-[#69D4F3] cursor-pointer font-[500] text-[#423e3e]">
                  Sell Docs
                </li>
                <li className="hover:text-[#69D4F3]  cursor-pointer font-[500] text-[#423e3e]">
                  Educators
                </li>
                <li className=":block  hover:text-[#69D4F3]  cursor-pointer">
                  Login
                </li>{" "}
                <li
                  className="  transition-all duration-150 ease-out
             max-md:block md:hidden text-[18px] font-[500] 
              text-black
            hover:text-[#EC497D]"
                >
                  Sign Up
                </li>
              </ul>{" "}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
