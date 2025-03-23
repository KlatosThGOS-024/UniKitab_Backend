"use client";
import { fetchPdfUrl } from "@/Hooks/pdfBook";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFileUrl } from "@/functions/docs/file";
import { useRouter } from "next/navigation"; // Changed from 'next/router'

interface propType {
  id: string;
  bookFrontImgSrc: string;
  fileId: string;
  name: string;
  createdAt: Date;
}

export const SearchBooks = ({ searchProp }: { searchProp: propType[] }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBookClick = (url: string) => {
    dispatch(addFileUrl(url));
  };

  if (!searchProp?.length) {
    return null;
  }

  const onClickHandler = async (fileid: string) => {
    if (!mounted) return;

    try {
      const response = await fetchPdfUrl(fileid);

      const fileUrl = response.data.downloadUrl;
      console.log(fileUrl);
      handleBookClick(fileUrl);

      router.push("/pdf/pdf-ai");
    } catch (error) {
      console.error("Error fetching PDF URL:", error);
    }
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
            <img
              src={value.bookFrontImgSrc}
              alt={value.name}
              className="h-16 w-16"
            />
            <p className="text-black break-words text-lg overflow-hidden">
              {value.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};
