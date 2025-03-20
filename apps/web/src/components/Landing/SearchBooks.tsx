import React from "react";
interface propType {
  id: string;
  bookFrontImgSrc: string;
  fileId: string;
  name: string;
  createdAt: Date;
}
// ery result: [
//   {
//     id: '28895819-434d-488c-ac06-4b330fb729a7',
//     name: 'Generative-AI-and-LLMs-for-Dummies.pdf',
//     bookFrontImgSrc: 'https://www.snowflake.com/wp-content/uploads/2024/01/Generative-AI-and-LLMs-for-Dummies.png',
//     fileId: '1CATQ1SBuC9rf0Zhh1D_zq0SHh31xiITc',
//     createdAt: 2025-03-20T07:55:09.643Z
//   }
// ]

export const SearchBooks = ({ searchProp }: { searchProp: propType[] }) => {
  if (!searchProp?.length) {
    return null;
  }
  return (
    <div className="border-b-[1px] rounded-lg break-words">
      {searchProp.map((value: propType, index: number) => {
        return (
          <div
            className="bg-white w-full cursor-pointer gap-4 rounded-lg mb-1 flex items-center px-3 py-4"
            key={index}
          >
            <img src={value.bookFrontImgSrc} className="h-16 w-16" />
            <p className="text-black break-words text-lg overflow-hidden">
              {value.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};
