import { PrismaService } from './prisma.service';
import { ProdutoLoja, Prisma } from '@prisma/client';
export declare class ProdutoLojaService {
    private prisma;
    constructor(prisma: PrismaService);
    buscarPorProdutoId(produtoLojaWhereUniqueInput: Prisma.ProdutoLojaWhereUniqueInput): Promise<ProdutoLoja | null>;
    buscarTodosProdutoLoja(params: {
        where?: Prisma.ProdutoLojaWhereInput;
        orderBy?: Prisma.ProdutoLojaOrderByWithRelationInput;
    }): Promise<ProdutoLoja[]>;
    criarProdutoLoja(data: Prisma.ProdutoLojaCreateInput): Promise<ProdutoLoja>;
    atualizarProdutoLoja(params: {
        where: Prisma.ProdutoLojaWhereUniqueInput;
        data: Prisma.ProdutoLojaUpdateInput;
    }): Promise<ProdutoLoja>;
    deletarProdutoLoja(where: Prisma.ProdutoLojaWhereUniqueInput): Promise<ProdutoLoja>;
}
