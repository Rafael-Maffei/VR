import { PrismaService } from './prisma.service';
import { Produto, Prisma } from '@prisma/client';
export declare class ProdutoService {
    private prisma;
    constructor(prisma: PrismaService);
    buscarProduto(produtoWhereUniqueInput: Prisma.ProdutoWhereUniqueInput): Promise<Produto | null>;
    buscarTodosProdutos(params: {
        where?: Prisma.ProdutoWhereInput;
        orderBy?: Prisma.ProdutoOrderByWithRelationInput;
    }): Promise<Produto[]>;
    criarProduto(data: Prisma.ProdutoCreateInput): Promise<Produto>;
    atualizarProduto(params: {
        where: Prisma.ProdutoWhereUniqueInput;
        data: Prisma.ProdutoUpdateInput;
    }): Promise<Produto>;
    deletarProduto(where: Prisma.ProdutoWhereUniqueInput): Promise<Produto>;
}
