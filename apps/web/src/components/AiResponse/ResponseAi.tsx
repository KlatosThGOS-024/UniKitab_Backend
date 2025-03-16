"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { FaBahai } from "react-icons/fa";
import { UserResponse } from "./UserMessage";
import { AiResponse } from "./AiMessage";
import { useSelector } from "react-redux";

import { getAIresponse } from "@/Hooks/AiApi";
import { IRootState } from "@/store/store";
import PdfToText from "@/utils/pdfGeneration/PdfToText";

interface ResponseProp {
  response_frm: string;
  response: string;
  responseId: string;
}

function InputTaker({
  setUserMessage,
  setStartingPageNumber,
  setEndingPageNumber,
}: {
  setUserMessage: React.Dispatch<SetStateAction<string>>;
  setStartingPageNumber: any;
  setEndingPageNumber: any;
}) {
  return (
    <div className="w-full items-center gap-2 flex">
      {" "}
      <textarea
        onChange={(e) => {
          setUserMessage(e.target.value);
        }}
        className="w-full py-[16px] px-4 text-[21px] bg-[#fff] text-[#111] rounded-lg
        outline-none placeholder:text-[21px]
               transition-all resize-none
              "
        rows={1}
        placeholder="Enter your input"
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = "auto";
          target.style.height = `${target.scrollHeight}px`;
        }}
      />
      <div className="space-y-2">
        <input
          onChange={(e) => {
            setStartingPageNumber(e.target.value);
          }}
          className="w-[64px]  bg-[#fff]
           text-[#111] rounded-md
        outline-none  placeholder:px-2
               transition-all resize-none"
          placeholder="start"
        ></input>
        <input
          onChange={(e) => {
            setEndingPageNumber(e.target.value);
          }}
          className="w-[64px]  bg-[#fff]
           text-[#111] rounded-md
        outline-none  placeholder:px-2
               transition-all resize-none"
          placeholder="end"
        ></input>
      </div>
    </div>
  );
}
export const Input = ({
  setResponse,
}: {
  setResponse: React.Dispatch<SetStateAction<ResponseProp[]>>;
}) => {
  const selecetor = useSelector(
    (state: IRootState) => state.fileReducer.FileUrl
  );

  const [userMessage, setUserMessage] = useState("");
  const [StartingPageNumber, setStartingPageNumber] = useState<number>();
  const [EndingPageNumber, setEndingPageNumber] = useState<number>();
  const getPdf = async () => {
    try {
      if (selecetor) {
        const response = new PdfToText(selecetor);
        if (StartingPageNumber && EndingPageNumber) {
          const data = await response.getTextualData(
            StartingPageNumber,
            EndingPageNumber
          );
          return data;
        }
      }
    } catch (error) {}
  };

  const onClickHandler = async () => {
    if (userMessage) {
      const newResponse: ResponseProp = {
        response_frm: "User",
        response: userMessage,
        responseId: "12333333",
      };
      setResponse((prevResponses) => {
        return [...prevResponses, newResponse];
      });
      let prompt = `${userMessage}`;

      if (StartingPageNumber && EndingPageNumber) {
        prompt += await getPdf();

        prompt += `starting page ${StartingPageNumber} to ${EndingPageNumber} this is the bookText => ${prompt}`;
      }
      console.log(prompt);
      // let aiResponse = ''
      const aiResponse = await getAIresponse(prompt);
      if (aiResponse.success) {
        const aiMessage: ResponseProp = {
          response_frm: "Ai",
          response: aiResponse.data,
          responseId: "12333334",
        };

        setResponse((prevResponses) => {
          return [...prevResponses, aiMessage];
        });
      }
    }
  };

  return (
    <div className="py-2 rounded-lg w-full max-md:px-3 bg-[#F8F5EE] shadow-2xl">
      <div className="flex max-sm:gap-[16px] max-md:gap-3 md:gap-[21px] px-[14px] py-[8px] items-center">
        <CiCamera className="w-[28px] h-[28px] cursor-pointer hover:text-[#FF612E]" />
        <FaBahai className="w-[28px] h-[28px] cursor-pointer hover:text-[#FF612E]" />
        <InputTaker
          setUserMessage={setUserMessage}
          setStartingPageNumber={setStartingPageNumber}
          setEndingPageNumber={setEndingPageNumber}
        />
        <IoIosSend
          onClick={onClickHandler}
          className="cursor-pointer w-[28px] h-[28px] m-2"
        />
      </div>
    </div>
  );
};

const Response = ({ response }: { response: ResponseProp[] }) => {
  return (
    <section className="w-full my-7 pb-[64px] pt-4">
      <div className="flex flex-col gap-[28px]">
        {response.map((value, index) => (
          <div
            key={index}
            className={`flex ${value.response_frm === "User" ? "justify-end" : "justify-start"}`}
          >
            {value.response_frm === "User" ? (
              <UserResponse message={value.response} />
            ) : (
              <AiResponse message={value.response} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const responses = [
  {
    response_frm: "User",
    response: "Q2",
    responseId: "12347",
  },
  {
    response_frm: "Ai",
    response:
      " Question 2 (a): The minimum height of a binary tree is equal to the depth of the tree.",
    responseId: "12348",
  },
];
export const ResponseBox = () => {
  const [response, setResponse] = useState<ResponseProp[]>(responses);

  return (
    <section className="relative h-screen flex max-md:space-y-[96px] max-md:flex-row-reverse flex-col">
      <div className="flex-grow w-full  pb-[196px] flex flex-col">
        <Response response={response} />
      </div>
      <div
        className="md:w-1/2 max-md:w-full fixed bottom-0 md:right-0
       bg-white"
      >
        <div className="max-w-full mx-auto max-md:w-full">
          <Input setResponse={setResponse} />
        </div>
      </div>
    </section>
  );
};
