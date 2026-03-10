/*
  Warnings:

  - You are about to drop the column `r20bjectKey` on the `Generation` table. All the data in the column will be lost.
  - You are about to drop the column `r20bjectKey` on the `Voice` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Generation" DROP COLUMN "r20bjectKey",
ADD COLUMN     "supaObjectKey" TEXT;

-- AlterTable
ALTER TABLE "Voice" DROP COLUMN "r20bjectKey",
ADD COLUMN     "supaObjectKey" TEXT;
