import { PrismaService } from './prisma.service';
import { Loja, Prisma } from '@prisma/client';
export declare class LojaService {
    private prisma;
    constructor(prisma: PrismaService);
    buscarTodasLojas(params: {
        where?: Prisma.LojaWhereInput;
        orderBy?: Prisma.LojaOrderByWithRelationInput;
    }): Promise<Loja[]>;
    buscarLoja(lojaWhereUniqueInput: Prisma.LojaWhereUniqueInput): Promise<Loja | null>;
    criarLoja(data: Prisma.LojaCreateInput): Promise<Loja>;
    atualizarLoja(params: {
        where: Prisma.LojaWhereUniqueInput;
        data: Prisma.LojaUpdateInput;
    }): Promise<Loja>;
    deletarLoja(where: Prisma.LojaWhereUniqueInput): Promise<Loja>;
}
