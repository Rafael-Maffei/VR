import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProdutoLoja as ProdutoLojaModel } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { ProdutoLojaService } from 'src/services/produto-loja.service';

@Controller('produto-loja')
export class ProdutoLojaController {
  constructor(private readonly produtoLojaService: ProdutoLojaService) {}

  // @Get(':produtoId')
  // async getProdutoLojaById(@Param('produtoId') produtoId: number): Promise<ProdutoLojaModel> {
  //   return this.produtoLojaService.buscarPorProdutoId({ idProduto: produtoId })
  // }

  @Get('')
  async getListaProdutoLojas(): Promise<ProdutoLojaModel[]> {
    return this.produtoLojaService.buscarTodosProdutoLoja({
      orderBy: { idLoja: 'asc' },
    });
  }

  @Post('')
  async criarProdutoLoja(
    @Body() produtoLojaDados: { idProduto: number, idLoja: number, preco: Decimal },
  ): Promise<ProdutoLojaModel> {
    console.log(produtoLojaDados);
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

  @Put(':produtoId/:lojaId')
  async atualizarPreco(
    @Body() produtoLojaDadosAlterar: { preco: Decimal },
    @Param('produtoId') produtoId: number,
    @Param('lojaId') lojaId: number): Promise<ProdutoLojaModel> {
      const { preco } = produtoLojaDadosAlterar;
    return this.produtoLojaService.atualizarProdutoLoja({
      where: {
        idProduto_idLoja: {
            idProduto: produtoId,
            idLoja: lojaId,
        },
      },
      data: { precoVenda: preco },
    });
  }

  @Delete(':produtoId/:lojaId')
  async removerLoja(
    @Param('produtoId') produtoId: number,
    @Param('lojaId') lojaId: number): Promise<ProdutoLojaModel> {
    return this.produtoLojaService.deletarProdutoLoja({
        idProduto_idLoja: {
            idProduto: produtoId,
            idLoja: lojaId,
        },
    });
  }
}