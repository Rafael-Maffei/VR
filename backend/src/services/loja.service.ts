import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Loja, Prisma } from '@prisma/client';

@Injectable()
export class LojaService {
  constructor(private prisma: PrismaService) {}

  async buscarTodasLojas(params: {
    where?: Prisma.LojaWhereInput;
    orderBy?: Prisma.LojaOrderByWithRelationInput;
  }): Promise<Loja[]> {
    const { where, orderBy } = params;
    return this.prisma.loja.findMany({
        where,
        orderBy,
    });
  }

  async buscarLoja(
    lojaWhereUniqueInput: Prisma.LojaWhereUniqueInput,    
  ): Promise<Loja | null> {
    return this.prisma.loja.findUniqueOrThrow({
      where: lojaWhereUniqueInput,
    });
  }

  async criarLoja(data: Prisma.LojaCreateInput): Promise<Loja> {
    return this.prisma.loja.create({
        data,
    });
  }

  async atualizarLoja(params: {
    where: Prisma.LojaWhereUniqueInput;
    data: Prisma.LojaUpdateInput;
  }): Promise<Loja> {
    const { data, where } = params;
    return this.prisma.loja.update({
        data,
        where,
    });
  }

  async deletarLoja(where: Prisma.LojaWhereUniqueInput): Promise<Loja> {
    return this.prisma.loja.delete({
        where,
    });
  }
}