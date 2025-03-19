/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Example` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `TestCases` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Example_problemId_key";

-- DropIndex
DROP INDEX "TestCases_problemId_key";

-- AlterTable
ALTER TABLE "Example" ADD COLUMN     "id" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "TestCases" ADD COLUMN     "id" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Example_id_key" ON "Example"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TestCases_id_key" ON "TestCases"("id");
