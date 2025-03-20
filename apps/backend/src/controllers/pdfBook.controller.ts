import { Request, Response } from "express";
import fs from "fs";
import { Drive } from "../utils/drive/googleDrive";
import { asyncHandler } from "../utils/asynchHandler";
import prisma from "@repo/db";

const addPdfBookToDrive = asyncHandler(async (req: Request, res: Response) => {
  try {
    if (!req.file?.originalname) {
      res.status(400).json({ message: "No PDF file uploaded." });
    }

    const pdfFile = req.file;
    const pdfData = req.body;
    const drive = new Drive();
    const authClient = await drive.authorize();
    const uploadPath = pdfFile?.path || "";

    const fileIdD = await drive.uploadFile(
      authClient,
      uploadPath,
      pdfFile?.originalname || ""
    );

    fs.unlinkSync(uploadPath);
    const pdfCreate = await prisma.pdfBook.create({
      data: {
        name: pdfFile?.originalname || "",
        bookFrontImgSrc: pdfData.imgSrc,
        fileId: fileIdD || "",
      },
    });

    res.json({ message: "PDF uploaded successfully!", pdfCreate });
  } catch (error) {
    console.error("Error uploading PDF:", error);
    res.status(500).json({ message: "Failed to upload PDF", error });
  }
});
const getPdfBook = asyncHandler(async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { name } = req.body;

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
    console.error("Error while getting pdf:", error);
    res.status(500).json({ message: "Failed to get PDF", error });
  }
});

export { addPdfBookToDrive, getPdfBook };
