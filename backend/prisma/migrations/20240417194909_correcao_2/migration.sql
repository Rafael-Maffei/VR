/*
  Warnings:

  - Made the column `descricao` on table `Produto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Produto" ALTER COLUMN "descricao" SET NOT NULL;
