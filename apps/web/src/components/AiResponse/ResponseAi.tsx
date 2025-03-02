"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { FaBahai } from "react-icons/fa";
import { UserResponse } from "./UserMessage";
import { AiResponse } from "./AiMessage";
import { useDispatch } from "react-redux";
import { addResponse } from "@/functions/messages/message";
import { getAIresponse } from "@/Hooks/AiApi";

interface ResponseProp {
  response_frm: string;
  response: string;
  responseId: string;
}

function InputTaker({
  setUserMessage,
}: {
  setUserMessage: React.Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="w-full">
      {" "}
      <textarea
        onChange={(e) => {
          setUserMessage(e.target.value);
        }}
        className="w-full py-[16px] px-4 text-[21px] bg-[#676F8B] text-[#454B62] rounded-lg
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
    </div>
  );
}
export const Input = ({
  setResponse,
}: {
  setResponse: React.Dispatch<SetStateAction<ResponseProp[]>>;
}) => {
  const [userMessage, setUserMessage] = useState("");
  const dispatch = useDispatch();

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

      const aiResponse = await getAIresponse(userMessage);
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
    <div className="py-2 rounded-lg w-full max-md:px-3 bg-[#101524] shadow-2xl">
      <div className="flex max-sm:gap-[16px] max-md:gap-3 md:gap-[21px] px-[14px] py-[8px] items-center">
        <CiCamera className="w-[28px] h-[28px] cursor-pointer hover:text-[#FF612E]" />
        <FaBahai className="w-[28px] h-[28px] cursor-pointer hover:text-[#FF612E]" />
        <InputTaker setUserMessage={setUserMessage} />
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
  useEffect(() => {
    console.log(response);
  }, [response]);

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
