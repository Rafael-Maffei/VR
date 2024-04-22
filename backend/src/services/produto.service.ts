import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Produto, Prisma } from '@prisma/client';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async buscarProduto(
    produtoWhereUniqueInput: Prisma.ProdutoWhereUniqueInput,    
  ): Promise<Produto | null> {
    return this.prisma.produto.findUniqueOrThrow({
      where: produtoWhereUniqueInput,
    });
  }

  async buscarTodosProdutos(params: {
    where?: Prisma.ProdutoWhereInput;
    orderBy?: Prisma.ProdutoOrderByWithRelationInput;
  }) : Promise<Produto[]> {
    const { where, orderBy } = params;
    return this.prisma.produto.findMany({
      where,
      orderBy,
    });
  }

  async criarProduto(data: Prisma.ProdutoCreateInput): Promise<Produto> {
    return this.prisma.produto.create({
      data,
    });
  }

  async atualizarProduto(params: {
    where: Prisma.ProdutoWhereUniqueInput;
    data: Prisma.ProdutoUpdateInput;
  }): Promise<Produto> {
    const { where, data } = params;
    return this.prisma.produto.update({
      where,
      data,
    });
  }

  async deletarProduto(where: Prisma.ProdutoWhereUniqueInput): Promise<Produto> {
    return this.prisma.produto.delete({
      where,
    });
  }
}