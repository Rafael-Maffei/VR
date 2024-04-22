-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(60),
    "custo" DECIMAL(13,3),
    "imagem" BYTEA NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loja" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(60) NOT NULL,

    CONSTRAINT "Loja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProdutoLoja" (
    "id" SERIAL NOT NULL,
    "idProduto" INTEGER NOT NULL,
    "idLoja" INTEGER NOT NULL,
    "precoVenda" DECIMAL(13,3),

    CONSTRAINT "ProdutoLoja_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProdutoLoja" ADD CONSTRAINT "ProdutoLoja_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutoLoja" ADD CONSTRAINT "ProdutoLoja_idLoja_fkey" FOREIGN KEY ("idLoja") REFERENCES "Loja"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
