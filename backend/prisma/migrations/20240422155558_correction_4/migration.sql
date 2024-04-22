/*
  Warnings:

  - The primary key for the `ProdutoLoja` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ProdutoLoja" DROP CONSTRAINT "ProdutoLoja_pkey",
ADD CONSTRAINT "ProdutoLoja_pkey" PRIMARY KEY ("idProduto");
