"use client";
import { fetchPdfUrl } from "@/Hooks/pdfBook";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFileUrl } from "@/functions/docs/file";
import { useRouter } from "next/navigation";
import {
  cnBooks,
  csaBooks,
  dbmsBooks,
  DSbooks,
} from "../../../public/constants";

interface Book {
  fileId: string;
  subject: string;
  title: string;
  imgSrc: string;

  description: string;
}
export const SearchBooks = ({ searchProp }: { searchProp: Book[] }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBookClick = async (fileid: string) => {
    if (!mounted) return;

    try {
      const response = await fetchPdfUrl(fileid);
      const fileUrl = response.data.downloadUrl;
      const pdfEndpoint = `http://localhost:8000/${fileUrl}`;

      dispatch(addFileUrl(pdfEndpoint));

      router.push("/pdf/pdf-ai");
    } catch (error) {
      console.error("Error fetching PDF URL:", error);
    }
  };

  if (!searchProp?.length) {
    return null;
  }

  return (
    <div className="border-b-[1px] rounded-lg break-words">
      {searchProp.map((value: Book, index: number) => (
        <div
          key={index}
          onClick={() => handleBookClick(value.fileId)}
          className="bg-white w-full cursor-pointer gap-4 rounded-lg mb-1 flex items-center px-3 py-4"
        >
          <img src={value.imgSrc} alt={value.title} className="h-16 w-16" />
          <p className="text-black break-words text-lg overflow-hidden">
            {value.title}
          </p>
        </div>
      ))}
    </div>
  );
};
