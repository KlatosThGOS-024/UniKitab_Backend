-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('easy', 'medium', 'hard');

-- CreateTable
CREATE TABLE "Example" (
    "problemId" TEXT NOT NULL,
    "inputText" TEXT NOT NULL,
    "outputText" TEXT NOT NULL,
    "explanation" TEXT,
    "img" TEXT
);

-- CreateTable
CREATE TABLE "TestCases" (
    "problemId" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Problem" (
    "problemNumber" TEXT,
    "problemId" TEXT NOT NULL,
    "problemTitle" TEXT NOT NULL,
    "inputText1" TEXT NOT NULL,
    "inputText2" TEXT NOT NULL,
    "inputText3" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "likesCount" INTEGER NOT NULL,
    "dislikeCount" INTEGER NOT NULL,
    "handlerFunc" TEXT NOT NULL,
    "starterFunctionName" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Example_problemId_key" ON "Example"("problemId");

-- CreateIndex
CREATE UNIQUE INDEX "TestCases_problemId_key" ON "TestCases"("problemId");

-- CreateIndex
CREATE UNIQUE INDEX "Problem_problemId_key" ON "Problem"("problemId");

-- AddForeignKey
ALTER TABLE "Example" ADD CONSTRAINT "Example_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("problemId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestCases" ADD CONSTRAINT "TestCases_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("problemId") ON DELETE RESTRICT ON UPDATE CASCADE;
