"use client";
import React, { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { IRootState } from "@/store/store";
import { useSelector } from "react-redux";

export const PdfViewer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fileUrl = useSelector((state: IRootState) => {
    return state.fileReducer.FileUrl;
  });

  useEffect(() => {
    if (!fileUrl) {
      setLoading(false);
      return;
    }

    try {
      setPdfUrl(fileUrl);
      setLoading(false);
    } catch (err) {
      console.error("Error setting up PDF viewer:", err);
      setError(
        `Failed to set up PDF viewer: ${err instanceof Error ? err.message : "Unknown error"}`
      );
      setLoading(false);
    }
  }, [fileUrl]);

  if (error || !fileUrl) {
    return (
      <div className="h-screen flex items-center justify-center ">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md max-w-lg">
          <h3 className="font-bold mb-2">Error Loading PDF</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5));
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-between p-2 bg-gray-100 border-b">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            className="px-2 py-1 bg-blue-500 text-white rounded"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
            className="px-2 py-1 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleZoomOut}
            className="px-2 py-1 bg-green-500 text-white rounded"
          >
            -
          </button>
          <span>{Math.round(zoom * 100)}%</span>
          <button
            onClick={handleZoomIn}
            className="px-2 py-1 bg-green-500 text-white rounded"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex-grow overflow-auto">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={fileUrl}
            defaultScale={zoom}
            onDocumentLoad={(e) => setTotalPages(e.doc.numPages)}
          />
        </Worker>
      </div>
    </div>
  );
};
