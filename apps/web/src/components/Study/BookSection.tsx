"use client";
import { addFileUrl } from "@/functions/docs/file";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  cnBooks,
  csaBooks,
  dbmsBooks,
  DSbooks,
} from "../../../public/constants";
import { getPdfBook } from "@/Hooks/pdfBook";
import { SearchBooks } from "../Landing/SearchBooks";

interface Book {
  subject: string;
  title: string;
  imgSrc: string;
  pdfPath?: string;
  description: string;
}

const BookCard = ({ book }: { book: Book }) => {
  const dispatch = useDispatch();

  const handleBookClick = async () => {
    if (book.pdfPath) {
      const response = await fetch(book.pdfPath);
      const blob = await response.blob();
      const generatedUrl = URL.createObjectURL(blob);
      dispatch(addFileUrl(generatedUrl));
    }
  };

  return (
    <div className="flex flex-col rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
      <a
        onClick={handleBookClick}
        href="/pdf/pdf-ai"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          src={book.imgSrc}
          alt={book.title}
        />
      </a>
      <div className="p-4 flex-grow border-t border-gray-200 bg-white">
        <h3 className="text-lg font-semibold mb-1 text-gray-800">
          {book.title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">Category: {book.subject}</p>
        <p className="text-sm text-gray-600 line-clamp-3">{book.description}</p>
      </div>
    </div>
  );
};

const SubjectTabs = ({
  activeSubject,
  onSubjectChange,
}: {
  activeSubject: string;
  onSubjectChange: (subject: string) => void;
}) => {
  const subjects = [
    { id: "ds", name: "Data Structure", data: DSbooks },
    { id: "csa", name: "Computer Architecture", data: csaBooks },
    { id: "cn", name: "Computer Networks", data: cnBooks },
    { id: "dbms", name: "Database Management System", data: dbmsBooks },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-md shadow-sm">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onSubjectChange(subject.name)}
            className={`
              px-4 py-2 text-sm font-medium 
              ${
                activeSubject === subject.name
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }
              border border-gray-300
              first:rounded-l-lg last:rounded-r-lg
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-300
            `}
          >
            {subject.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const BooksGrid = ({ books }: { books: Book[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};
interface propType {
  id: string;
  bookFrontImgSrc: string;
  fileId: string;
  name: string;
  createdAt: Date;
}
export const BookSection = () => {
  const [activeSubject, setActiveSubject] = useState("Data Structure");
  const [books, setBooks] = useState<Book[]>(DSbooks);
  const [showSearch, setShowSearch] = useState(false);
  const [searchProp, setSearchProp] = useState<propType[]>([]);

  const handleSubjectChange = (subject: string) => {
    setActiveSubject(subject);

    switch (subject) {
      case "Data Structure":
        setBooks(DSbooks);
        break;
      case "Computer Architecture":
        setBooks(csaBooks);
        break;
      case "Computer Networks":
        setBooks(cnBooks);
        break;
      case "Database Management System":
        setBooks(dbmsBooks);
        break;
      default:
        setBooks(DSbooks);
    }
  };
  const onSearchHandler = async (e: any) => {
    const data = await getPdfBook(e.target.value);
    setSearchProp(data.getPDf);
  };
  return (
    <section className="bg-gray-50 pb-16">
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r opacity-90"></div>
        <img
          className="w-full h-96 object-cover"
          src="https://www.studypool.com/images/notebank/backgrounds/heading-bg.jpg"
          alt="Books Banner"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Notebank
          </h1>
          <p className="text-xl text-black max-w-2xl mb-8">
            Your go-to place for Computer Science PYQs, PDFs, and
            books—everything you need to study, all in one spot!
          </p>
          <div className="relative mt-4 w-2xl  max-xl:hidden">
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg">
              <input
                onChange={(e) => {
                  setShowSearch(!showSearch);
                  return onSearchHandler(e);
                }}
                className="w-full px-6 py-4 text-gray-700 placeholder-gray-500 focus:outline-none"
                placeholder="Search study resources"
                aria-label="Search study resources"
              />
              {showSearch && (
                <div className=" w-full border-t-[1px]  break-words z-50  absolute top-11">
                  <SearchBooks searchProp={searchProp} />
                </div>
              )}
              <button className="px-6 py-4 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-300">
                <IoSearchOutline className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
          {/* Search Bar */}
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Subject Tabs */}
        <SubjectTabs
          activeSubject={activeSubject}
          onSubjectChange={handleSubjectChange}
        />

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {activeSubject} Books
        </h2>

        {/* Books Grid */}
        <BooksGrid books={books} />
      </div>
    </section>
  );
};
function setSearchProp(getPDf: any) {
  throw new Error("Function not implemented.");
}
