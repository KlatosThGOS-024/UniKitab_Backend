import { Router } from "express";

import {
  addPdfBookToDrive,
  getPdfBook,
} from "../controllers/pdfBook.controller";
import { upload } from "../middlewares/multer.middleware";

const pdfBookRouter = Router();

pdfBookRouter
  .route("/pdf-add")
  .post(upload.single("PdfFile"), addPdfBookToDrive);
pdfBookRouter.route("/pdf-get").post(getPdfBook);

export default pdfBookRouter;
