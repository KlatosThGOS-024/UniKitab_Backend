"use client";
import React, { useState, useEffect } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import * as pdfjsLib from "pdfjs-dist";
import { useSelector } from "react-redux";
import { IRootState } from "@/store/store";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

export const PdfViewer = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fileUrl = useSelector((state: IRootState) => {
    return state.fileReducer.FileUrl;
  });
  console.log("Loading PDF from:", fileUrl);

  useEffect(() => {
    if (!fileUrl) return;

    try {
      console.log("Loading PDF from2:", fileUrl);

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

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md max-w-lg">
          <h3 className="font-bold mb-2">Error Loading PDF</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden border w-full border-gray-300">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-500">
            <div className="animate-pulse flex flex-col items-center">
              <svg
                className="w-10 h-10 text-gray-400 mb-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14v6m-2-6v6m-2-6v6M5 10v10m2-10v10m2-10v10M10 4v2m0 12v2M3 6h18M3 16h18"></path>
              </svg>
              <p>Loading PDF document...</p>
            </div>
          </div>
        </div>
      ) : pdfUrl ? (
        <Viewer
          fileUrl={pdfUrl}
          plugins={[defaultLayoutPluginInstance]}
          renderError={(errorMsg) => (
            <div className="text-red-500 p-4">
              Failed to render PDF: {errorMsg.message}
            </div>
          )}
        />
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-500">No PDF document to display</div>
        </div>
      )}
    </div>
  );
};
