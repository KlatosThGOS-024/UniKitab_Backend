import { Request, Response } from "express";
import fs from "fs";
import { Drive } from "../utils/drive/googleDrive";
import { asyncHandler } from "../utils/asynchHandler";
import prisma from "@repo/db";

const addPdfBookToDrive = asyncHandler(async (req: Request, res: Response) => {
  try {
    const pdfFile = req.files;
    const pdfData = req.body;

    const drive = new Drive();
    const authClient = await drive.authorize();
    //@ts-ignore
    const file = pdfFile?.PdfFile[0];
    const uploadPath = file?.path;
    const fileIdD = await drive.uploadFile(
      authClient,
      uploadPath,
      file?.originalname || ""
    );
    console.log("upload", uploadPath, req.body.imgSrc);
    fs.unlinkSync(uploadPath);
    console.log("djkfshfdfhdf", {
      name: file?.originalname,
      bookFrontImgSrc: pdfData.imgSrc,
      fileId: pdfData.fileId,
    });
    const pdfCreate = await prisma.pdfBook.create({
      data: {
        name: file?.originalname,
        bookFrontImgSrc: pdfData.imgSrc,
        fileId: pdfData.fileId,
      },
    });

    res.json({ message: "PDF uploaded successfully!", pdfCreate });
  } catch (error) {
    console.error("Error uploading PDF:", error);
    res.status(500).json({ message: "Failed to upload PDF", error });
  }
});
const getPdfBookName = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ message: "Name parameter is required" });
    }

    const getPDf = await prisma.pdfBook.findMany({
      where: {
        name: {
          startsWith: name,
          mode: "insensitive",
        },
      },
    });

    res.json({ message: "PDF get successfully!", getPDf });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to get PDF", error: String(error) });
  }
});

const getPdfBookUrl = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { fileId } = req.body;
    if (!fileId) {
      res.status(400).json({ message: "File ID parameter is required" });
    }

    const pdfBook = await prisma.pdfBook.findFirst({
      where: {
        fileId: fileId,
      },
    });

    if (!pdfBook) {
      res.status(400).json({ message: "PDF book not found" });
    }

    const drive = new Drive();
    const authClient = await drive.authorize();

    const fileUrl = await drive.getFileUrl(authClient, fileId);
    console.log("fileUrlfileUrlfileUrl", fileUrl);
    if (!fileUrl) {
      res.status(400).json({ message: "Failed to get file URL" });
    }
    console.log("fileUrlfileUrlfileUrl", "dff");

    res.json({
      message: "PDF URL retrieved successfully!",
      data: {
        downloadUrl: fileUrl,
      },
    });
  } catch (error) {
    console.error("Error getting PDF URL:", error);
    res.status(500).json({
      message: "Failed to get PDF URL",
      error: String(error),
    });
  }
});

export { addPdfBookToDrive, getPdfBookName, getPdfBookUrl };
