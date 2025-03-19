"use client";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addFileUrl } from "@/functions/docs/file";

export const UploadSheet = () => {
  const [files, setFiles] = useState<File | null>(null);
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setFiles(file);
    }
  };
  useEffect(() => {
    if (files) {
      const fileUrl = URL.createObjectURL(files);

      dispatch(addFileUrl(fileUrl));
    }
  }, [files, dispatch]);

  const formatFileSize = (bytes: number | null) => {
    if (bytes) {
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    }
  };
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <section className="xl:w-[1200px] md:w-[900px] mx-auto">
      <div className="flex mt-[28px]  w-full flex-col gap-[64px] ">
        <h2 className=" text-[28px] whitespace-nowrap">Chat Documents</h2>
        <div className="flex justify-between rounded-md border-[#e6e6e6] border-[1px]  bg-white px-[64px] py-[28px] ">
          <h2>{files ? files.name : "files"}</h2>
          <div className="flex gap-3 text-[19px] items-center">
            <span>
              <span>{files ? formatFileSize(files.size) : "N/A"}</span>
            </span>
            {files && (
              <a
                href="/study/litecode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosLink className="cursor-pointer w-7 h-7" />
              </a>
            )}
            <MdDelete className="cursor-pointer w-7 h-7" />
          </div>
        </div>
        <div className=" shadow-md shadow-[#4864FF] flex-shrink rounded-xl px-[64px] py-8">
          {" "}
          <div
            className=" max-w-[696px] h-[396px]
         mx-auto flex items-center justify-center rounded-xl border-dotted border-[4px] border-[#5972FE] "
          >
            <div className="flex items-center  flex-col gap-3">
              <p className="text-[21px] font-[500]">Click to upload the pdf </p>

              <svg
                className="w-[96px] h-[96px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 68 83"
              >
                <g filter="url(#UploadFileIcon_svg_inline__a)">
                  <path
                    fill="#224E94"
                    d="M12.2 16.4c0-1.7 1.4-3.1 3.2-3.1h21.4q2.8 0 4.8 2L53.3 27q2 2 2 4.8v35c0 1.8-1.4 3.2-3.2 3.2H15.4a3 3 0 0 1-3.2-3.2z"
                  ></path>
                </g>
                <g filter="url(#UploadFileIcon_svg_inline__b)">
                  <path
                    fill="#A026FF"
                    fillOpacity="0.3"
                    d="M11.3 15c0-1.7 1.4-3 3.2-3H37q2.8 0 4.8 2l12.4 12.4q2 2 2 4.7v36.7c0 1.8-1.4 3.2-3.2 3.2H14.5a3 3 0 0 1-3.2-3.2z"
                  ></path>
                </g>
                <path
                  fill="url(#UploadFileIcon_svg_inline__c)"
                  d="M9.8 12.2c0-1.8 1.4-3.2 3.1-3.2h24.5q2.9 0 4.8 2l13.6 13.6q1.9 2 2 4.7V69c0 1.8-1.5 3.2-3.2 3.2H12.9A3 3 0 0 1 9.7 69z"
                ></path>
                <path
                  fill="url(#UploadFileIcon_svg_inline__d)"
                  d="M9.8 12.2c0-1.8 1.4-3.2 3.1-3.2h24.5q2.9 0 4.8 2l13.6 13.6q1.9 2 2 4.7V69c0 1.8-1.5 3.2-3.2 3.2H12.9A3 3 0 0 1 9.7 69z"
                ></path>
                <mask
                  id="UploadFileIcon_svg_inline__f"
                  width="49"
                  height="65"
                  x="9"
                  y="8"
                  maskUnits="userSpaceOnUse"
                >
                  <path
                    fill="url(#UploadFileIcon_svg_inline__e)"
                    d="M9.8 12.2c0-1.8 1.4-3.2 3.1-3.2h24.5q2.9 0 4.8 2l13.6 13.6q1.9 2 2 4.7V69c0 1.8-1.5 3.2-3.2 3.2H12.9A3 3 0 0 1 9.7 69z"
                  ></path>
                </mask>
                <g mask="url(#UploadFileIcon_svg_inline__f)">
                  <g filter="url(#UploadFileIcon_svg_inline__g)">
                    <path
                      fill="#000"
                      fillOpacity="0.5"
                      d="M40.2 26.5 43.4 10 57 23.2z"
                    ></path>
                  </g>
                  <path
                    fill="url(#UploadFileIcon_svg_inline__h)"
                    stroke="url(#UploadFileIcon_svg_inline__i)"
                    strokeWidth="0.3"
                    d="m40.2 8-.2-.2v15.4c0 1.8 1.4 3.3 3.2 3.3h15.6l-.2-.2z"
                  ></path>
                  <path d="M-6.3.3H74v80.5H-6.3z"></path>
                  <path
                    fill="url(#UploadFileIcon_svg_inline__j)"
                    fillOpacity="0.1"
                    d="M-6.3.3H74v80.5H-6.3z"
                  ></path>
                </g>
                <g filter="url(#UploadFileIcon_svg_inline__k)">
                  <path d="M9.8 12.2c0-1.8 1.4-3.2 3.1-3.2h24.5q2.9 0 4.8 2l13.6 13.6q1.9 2 2 4.7V69c0 1.8-1.5 3.2-3.2 3.2H12.9A3 3 0 0 1 9.7 69z"></path>
                </g>
                <path
                  stroke="#000"
                  strokeWidth="0.3"
                  d="M12.9 8.9a3.3 3.3 0 0 0-3.3 3.3v56.7c0 1.9 1.5 3.3 3.3 3.3h41.7c1.8 0 3.3-1.4 3.3-3.3V29.3q0-2.8-2-4.8L42.3 10.9q-2-2-4.9-2z"
                ></path>
                <rect
                  width="36"
                  height="36"
                  x="30.3"
                  y="44.5"
                  fill="#070D1B"
                  rx="18"
                ></rect>
                <path
                  fill="#fff"
                  d="M54.5 62a1 1 0 0 1-1.3 0l-4-4v11.4a1 1 0 1 1-1.9 0V58l-4 4a1 1 0 1 1-1.3-1.3l5.6-5.6a1 1 0 0 1 1.3 0l5.6 5.6a1 1 0 0 1 0 1.4"
                ></path>
                <defs>
                  <radialGradient
                    id="UploadFileIcon_svg_inline__c"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(126.8 26 19)scale(76.9642 58.6605)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EFEFEF"></stop>
                    <stop offset="1" stopColor="#FDFDFD"></stop>
                  </radialGradient>
                  <radialGradient
                    id="UploadFileIcon_svg_inline__d"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(34.47886 -45.07038 34.35658 26.2828 7.3 76)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#F9FBFF"></stop>
                  </radialGradient>
                  <radialGradient
                    id="UploadFileIcon_svg_inline__e"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(126.8 26 19)scale(76.9642 58.6605)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EFEFEF"></stop>
                    <stop offset="1" stopColor="#FDFDFD"></stop>
                  </radialGradient>
                  <radialGradient
                    id="UploadFileIcon_svg_inline__h"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(14.15804 -14.77666 46.04192 44.11438 40.2 26.6)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff"></stop>
                    <stop offset="0.5" stopColor="#F9FBFF"></stop>
                    <stop offset="0.6" stopColor="#fff"></stop>
                  </radialGradient>
                  <radialGradient
                    id="UploadFileIcon_svg_inline__i"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(-47.7 51.7 -27.5)scale(20.1006 20.3394)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopOpacity="0.1"></stop>
                    <stop offset="1" stopOpacity="0"></stop>
                  </radialGradient>
                  <filter
                    id="UploadFileIcon_svg_inline__a"
                    width="52.1"
                    height="65.8"
                    x="7.7"
                    y="8.8"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      result="effect1_foregroundBlur_171_3567"
                      stdDeviation="2.3"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="UploadFileIcon_svg_inline__b"
                    width="67.4"
                    height="81.6"
                    x="0.1"
                    y="0.7"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      result="effect1_foregroundBlur_171_3567"
                      stdDeviation="5.6"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="UploadFileIcon_svg_inline__g"
                    width="34.9"
                    height="34.5"
                    x="31.2"
                    y="1"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      result="effect1_foregroundBlur_171_3567"
                      stdDeviation="4.5"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="UploadFileIcon_svg_inline__k"
                    width="48.5"
                    height="64.3"
                    x="9.5"
                    y="8.3"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="0.2"></feOffset>
                    <feGaussianBlur stdDeviation="0.2"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                    <feBlend
                      in2="shape"
                      result="effect1_innerShadow_171_3567"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="0.2"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 0.768924 0 0 0 0 0.802984 0 0 0 0 0.858333 0 0 0 1 0"></feColorMatrix>
                    <feBlend
                      in2="effect1_innerShadow_171_3567"
                      result="effect2_innerShadow_171_3567"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="-0.7"></feOffset>
                    <feGaussianBlur stdDeviation="0.2"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 0.86566 0 0 0 0 0.880943 0 0 0 0 0.891667 0 0 0 1 0"></feColorMatrix>
                    <feBlend
                      in2="effect2_innerShadow_171_3567"
                      result="effect3_innerShadow_171_3567"
                    ></feBlend>
                  </filter>
                  <pattern
                    id="UploadFileIcon_svg_inline__j"
                    width="1.4"
                    height="1.4"
                    patternContentUnits="objectBoundingBox"
                  >
                    <use transform="scale(.0028)"></use>
                  </pattern>
                </defs>
              </svg>
              <button
                className="bg-[#4864FF]  items-center flex gap-3
             rounded-lg text-white px-[38px] hover:opacity-90
             py-[12px] text-[21px]"
              >
                <label
                  className="cursor-pointer
               text-white px-4 py-2 
               rounded-lg "
                >
                  Choose Files
                  <input
                    type="file"
                    onChange={(e) => {
                      if (e.target.files) {
                        handleFileChange(e);
                      }
                    }}
                    style={{ display: "none" }}
                  />
                </label>
                <FaChevronDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
