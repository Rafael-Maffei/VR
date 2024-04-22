import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ProdutoLoja, Prisma } from '@prisma/client';

@Injectable()
export class ProdutoLojaService {
  constructor(private prisma: PrismaService) {}

  async buscarPorProdutoId(
    produtoLojaWhereUniqueInput: Prisma.ProdutoLojaWhereUniqueInput,    
  ): Promise<ProdutoLoja | null> {
    return this.prisma.produtoLoja.findUniqueOrThrow({
      where: produtoLojaWhereUniqueInput,
    });
  }  

  async buscarTodosProdutoLoja(params: {
    where?: Prisma.ProdutoLojaWhereInput;
    orderBy?: Prisma.ProdutoLojaOrderByWithRelationInput;
  }): Promise<ProdutoLoja[]> {
    const { where, orderBy } = params;
    return this.prisma.produtoLoja.findMany({
        where,
        orderBy,
    });
  }

  async criarProdutoLoja(data: Prisma.ProdutoLojaCreateInput): Promise<ProdutoLoja> {
    return this.prisma.produtoLoja.create({
        data,
    });
  }

  async atualizarProdutoLoja(params: {
    where: Prisma.ProdutoLojaWhereUniqueInput;
    data: Prisma.ProdutoLojaUpdateInput;
  }): Promise<ProdutoLoja> {
    const { data, where } = params;
    return this.prisma.produtoLoja.update({
        data,
        where,
    });
  }

  async deletarProdutoLoja(where: Prisma.ProdutoLojaWhereUniqueInput): Promise<ProdutoLoja> {
    return this.prisma.produtoLoja.delete({
        where,
    });
  }
}