/*
  Warnings:

  - The primary key for the `ProdutoLoja` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ProdutoLoja` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProdutoLoja" DROP CONSTRAINT "ProdutoLoja_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ProdutoLoja_pkey" PRIMARY KEY ("idProduto", "idLoja");
