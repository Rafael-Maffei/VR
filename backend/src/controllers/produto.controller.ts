import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProdutoService } from '../services/produto.service';
import { Produto as ProdutoModel } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get('')
  async buscarLista(): Promise<ProdutoModel[]> {
    return this.produtoService.buscarTodosProdutos({
      orderBy: { id: 'asc' },
    });
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string): Promise<ProdutoModel> {
    return this.produtoService.buscarProduto({ id: Number(id) });
  }
  
  @Get(':searchString')
  async buscarPorDescricao(
    @Param('searchString') searchString: string,
  ): Promise<ProdutoModel[]> {
    return this.produtoService.buscarTodosProdutos({
      where: {
        descricao: { contains: searchString },
      },
    });
  }

  @Get(':searchCost')
  async buscarPorCusto(
    @Param('searchCost') custoDigitado: Decimal,
  ): Promise<ProdutoModel[]> {
    return this.produtoService.buscarTodosProdutos({
      where: {
        custo: custoDigitado,
      },
    });
  }

  @Post('')
  async criarProduto(
    @Body() produtoDados: { descricao: string; custo?: Decimal; imagem?: Buffer},
  ): Promise<ProdutoModel> {
    const { descricao, custo, imagem } = produtoDados;
    return this.produtoService.criarProduto({
      descricao,
      custo,
      imagem,
    });
  }

  @Put(':id')
  async atualizarProduto(
    @Body() produtoDadosAlterar: { descricao: string; custo?: Decimal; imagem?: Buffer},
    @Param('id') id: string): Promise<ProdutoModel> {
      const { descricao, custo, imagem } = produtoDadosAlterar;
    return this.produtoService.atualizarProduto({
      where: { id: Number(id) },
      data: { descricao, custo, imagem },
    });
  }

  @Delete(':id')
  async removerProduto(@Param('id') id: string): Promise<ProdutoModel> {
    return this.produtoService.deletarProduto({ id: Number(id) });
  }
}