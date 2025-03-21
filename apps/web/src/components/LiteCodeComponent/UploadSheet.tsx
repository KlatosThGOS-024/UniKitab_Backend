"use client";
import { getAIresponse2 } from "@/Hooks/AiApi";
import React, { useState } from "react";

const FileUpload = ({ setArrayOfQs }: { setArrayOfQs: any }) => {
  const [files, setFiles] = useState<File | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [problems, setProblems] = useState<any[]>([]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setLoader(true);
      setFiles(file);
      setUploadStatus("Processing file...");

      try {
        const fileContent = await extractQuestionsFromFile(file);

        const questionArrayJson = await sendQuestionsToBackend(fileContent);
        const questionArray = questionArrayJson
          .replace("```json", "")
          .replace("```", "");
        console.log(questionArray);
        setArrayOfQs(questionArray);
        setUploadStatus(`Successfully processed the file.`);
      } catch (error) {
        console.error("Error processing file:", error);
        setUploadStatus("Error processing file. Please try again.");
      } finally {
        setLoader(false);
      }
    }
  };

  const extractQuestionsFromFile = async (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result as string;
        resolve(fileContent);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  };

  const sendQuestionsToBackend = async (questions: string) => {
    try {
      const response = await getAIresponse2(questions);
      return response;
    } catch (error) {
      console.error("Error sending questions to backend:", error);
      throw error;
    }
  };

  return (
    <section className="flex items-center xl:w-[600px] md:w-[500px] mx-auto">
      <div className="flex px-6 w-full flex-col gap-[64px]">
        <div className="max-lg:h-[296px] shadow-md shadow-[#111] flex-shrink rounded-xl px-[64px] py-8">
          <div
            className="max-lg:max-w-[296px] max-w-[396px] h-[396px] max-lg:h-[196px] 
                      mx-auto flex items-center justify-center rounded-xl  
                      border-dotted mt-4 max-lg:py-[109px] border-[4px] border-[#e4e4e762]"
          >
            {loader ? (
              <div className="flex items-center flex-col gap-3">
                <p className="text-[21px] font-[500]">{uploadStatus}</p>
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            ) : (
              <div className="flex items-center flex-col gap-3">
                {uploadStatus && !loader ? (
                  <p className="text-[16px] text-green-400 mb-2">
                    {uploadStatus}
                  </p>
                ) : null}
                {problems.length > 0 ? (
                  <p className="text-[16px] text-green-400 mb-2">
                    {problems.length} problems extracted
                  </p>
                ) : null}
                <p className="text-[21px] font-[500]">
                  Click to upload your file
                </p>
                <div className="animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-up h-14 w-14 text-muted-foreground/70 animate-float"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M12 12v6"></path>
                    <path d="m15 15-3-3-3 3"></path>
                  </svg>
                </div>
                <button className="items-center flex gap-3 rounded-lg px-[38px] hover:opacity-90 py-[12px] text-[16px]">
                  <label className="cursor-pointer px-4 py-2 text-[#e4e4e762] rounded-lg">
                    Upload your DSA questions file (CSV, JSON, or Excel)
                    <input
                      type="file"
                      accept=".csv,.json,.xlsx,.xls,.txt"
                      onChange={(e) => {
                        if (e.target.files) {
                          handleFileChange(e);
                        }
                      }}
                      style={{ display: "none" }}
                    />
                  </label>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileUpload;
