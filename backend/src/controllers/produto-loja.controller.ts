import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProdutoLoja as ProdutoLojaModel } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { ProdutoLojaService } from 'src/services/produto-loja.service';

@Controller('produto-loja')
export class ProdutoLojaController {
  constructor(private readonly produtoLojaService: ProdutoLojaService) {}

  @Get(':produtoId')
  async getListaProdutoLojas(@Param('produtoId') produtoId: number): Promise<ProdutoLojaModel[]> {
    return this.produtoLojaService.buscarTodosProdutoLoja({
      where: { idProduto: Number(produtoId) },
      orderBy: { idProduto: 'asc' },
    });
  }

  @Post('')
  async criarProdutoLoja(
    @Body() produtoLojaDados: { idProduto: number, idLoja: number, preco: number },
  ): Promise<ProdutoLojaModel> {
    const { idProduto, idLoja, preco } = produtoLojaDados;
    return this.produtoLojaService.criarProdutoLoja({
        produto: {
            connect: {
                id: idProduto,
            },
        },
        loja: {
            connect: {
                id: idLoja,
            },
        },
        precoVenda: preco,
    });
  }

  @Put(':produtoId')
  async atualizarPreco(
    @Body() produtoLojaDadosAlterar: { id: number, preco: Decimal },
    @Param('produtoId') produtoId: number): Promise<ProdutoLojaModel> {
      const { id, preco } = produtoLojaDadosAlterar;
    return this.produtoLojaService.atualizarProdutoLoja({
      where: { 
        id: id,
        idProduto: Number(produtoId) },
      data: { precoVenda: preco },
    });
  }

  @Delete(':lojaId')
  async removerLoja(
    @Body() produtoLojaDadosDeletar: { id: number },
    @Param('lojaId') lojaId: number): Promise<ProdutoLojaModel> {
      const { id } = produtoLojaDadosDeletar;
    return this.produtoLojaService.deletarProdutoLoja({ 
      id: id,
      idLoja: Number(lojaId) });
  }
}