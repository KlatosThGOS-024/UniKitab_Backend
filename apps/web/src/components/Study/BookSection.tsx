import React from "react";
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
    <section className="my-[96px]">
      <div
        className="w-[1400px] max-lg:w-[700px]
     max-md:w-[500px] mx-auto z-30"
      >
        <div
          className="flex items-center w-[800px]  
        max-md:grid grid-cols-2 max-md:px-3 
       gap-[21px]"
        >
          {imageArray.map((value, index) => {
            return (
              <div
                key={index}
                className="  cursor-pointer
                 border-[1px] shadow-lg  rounded-lg"
              >
                <img
                  src={value.imgSrc}
                  className="rounded-b-none w-[196px] rounded-lg"
                />
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
