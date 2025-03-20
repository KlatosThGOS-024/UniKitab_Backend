-- CreateTable
CREATE TABLE "PdfBook" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bookFrontImgSrc" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PdfBook_pkey" PRIMARY KEY ("id")
);
