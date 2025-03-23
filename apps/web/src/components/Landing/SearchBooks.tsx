import { fetchPdfUrl } from "@/Hooks/pdfBook";
import React from "react";
interface propType {
  id: string;
  bookFrontImgSrc: string;
  fileId: string;
  name: string;
  createdAt: Date;
}

export const SearchBooks = ({ searchProp }: { searchProp: propType[] }) => {
  if (!searchProp?.length) {
    return null;
  }
  const onClickHandler = async (fileid: string) => {
    const response = await fetchPdfUrl(fileid);
    console.log("djkfshfdsfdsfhjkl");
    console.log(response);
  };
  return (
    <div className="border-b-[1px] rounded-lg break-words">
      {searchProp.map((value: propType, index: number) => {
        return (
          <div
            onClick={() => {
              onClickHandler(value.fileId);
            }}
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
