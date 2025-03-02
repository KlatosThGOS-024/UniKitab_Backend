"use client";
import { PdfViewer } from "@/components/Pdf/PdfViewer";
import { ResponseBox } from "@/components/AiResponse/ResponseAi";
import { NavBar } from "@/components/Landing/NavBar";
const page = () => {
  return (
    <section>
      <div className=" w-full h-screen">
        <div
          className=" fixed z-40  w-full
         bg-white top-0"
        >
          <NavBar />
        </div>

        <div className=" mt-[64px] flex max-md:flex-col">
          <div className=" w-full">
            <PdfViewer />
          </div>
          <div className="w-full overflow-scroll">
            <ResponseBox />
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
// "@react-pdf-viewer/default-layout": "^3.12.0",
// "@react-pdf/renderer": "^4.2.2",
// "pdfjs-dist": "^3.4.120",
// "react-pdf": "^9.2.1"
