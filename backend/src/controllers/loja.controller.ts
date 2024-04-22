import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Loja as LojaModel } from '@prisma/client';
import { LojaService } from 'src/services/loja.service';

@Controller('loja')
export class LojaController {
  constructor(private readonly lojaService: LojaService) {}

  @Get('')
  async getListaLojas(): Promise<LojaModel[]> {
    return this.lojaService.buscarTodasLojas({
      orderBy: { id: 'asc' },
    });
  }

  @Get(':id')
  async getLojaById(@Param('id') id: string): Promise<LojaModel> {
    return this.lojaService.buscarLoja({ id: Number(id) });
  }

  @Post('')
  async criarLoja(
    @Body() lojaDados: { descricao: string },
  ): Promise<LojaModel> {
    const { descricao } = lojaDados;
    return this.lojaService.criarLoja({ descricao });
  }

  @Put(':id')
  async atualizarLoja(
    @Body() lojaDadosAlterar: { descricao: string },
    @Param('id') id: string): Promise<LojaModel> {
      const { descricao } = lojaDadosAlterar;
    return this.lojaService.atualizarLoja({
      where: { id: Number(id) },
      data: { descricao },
    });
  }

  @Delete(':id')
  async removerLoja(@Param('id') id: string): Promise<LojaModel> {
    return this.lojaService.deletarLoja({ id: Number(id) });
  }
}