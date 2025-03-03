import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const imageArray = [
  {
    imgSrc:
      "https://m.media-amazon.com/images/I/61O6K0yPmzL._AC_UF1000,1000_QL80_.jpg",
    title: "Algo",
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/81Ve58ZJLEL.jpg",
    title: "Computer Bla Bla",
  },
  {
    imgSrc:
      "https://m.media-amazon.com/images/I/61JmBUeCaNL._AC_UF1000,1000_QL80_.jpg",
    title: "Computer Networks",
  },
];

export const BookSection = () => {
  return (
    <section className="">
      <div className="w-full relative">
        {" "}
        <img
          className="w-full 
           xl:h-[496px] "
          src="https://www.studypool.com/images/notebank/backgrounds/heading-bg.jpg"
        />
        <div className="space-y-2  absolute top-[10%] left-[25%] ">
          <h3 className="text-[26px] text-[#C3EBFC]"> The Notebank</h3>
          <p className="text-[18px] text-gray-600">
            Your go-to place for Computer Science PYQs, PDFs, and
            books—everything you need to study, all in one spot!
          </p>
        </div>
        <div
          className="xl:w-[996px] mt-7  max-lg:hidden    absolute top-[20%] left-[25%] 
 rounded-lg max-xl:w-[496px]  flex items-center  bg-[#FFFFFF] border-[1px] hover:shadow-[#69D4F3] hover:shadow-sm  "
        >
          <input
            className="placeholder:text-gray-500
             placeholder:text-[18px] w-full 
                 text-black px-4 py-5
                  hover:outline-[#69D4F3] rounded-lg outline-none bg-[#FFFFFF]"
            placeholder="Search study resources"
          ></input>
          <div className=" px-4 border-l-[1px] rounded-l-none py-2">
            <IoSearchOutline className=" font-[600] w-[21px] h-[21px] text-[#69D4F3]" />
          </div>
        </div>
      </div>
      <div
        className="w-[900px] max-lg:w-[700px]
     max-md:w-[500px] mx-auto z-30"
      >
        <div
          className=" items-center grid lg:grid-cols-4 max-lg:grid-cols-3  max-md:grid-cols-2 gap-8 
        
   "
        >
          {imageArray.map((value, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer border-[1px]
                 shadow-lg rounded-lg"
              >
                <img src={value.imgSrc} className="rounded-b-none rounded-lg" />
                <div
                  className=" bg-white ml-3 
       text-[21px] font-[400] text-black"
                >
                  <span>{value.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
