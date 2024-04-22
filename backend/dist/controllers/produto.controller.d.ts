/// <reference types="node" />
import { ProdutoService } from '../services/produto.service';
import { Produto as ProdutoModel } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    buscarLista(): Promise<ProdutoModel[]>;
    buscarPorId(id: string): Promise<ProdutoModel>;
    buscarPorDescricao(searchString: string): Promise<ProdutoModel[]>;
    buscarPorCusto(custoDigitado: Decimal): Promise<ProdutoModel[]>;
    criarProduto(produtoDados: {
        descricao: string;
        custo?: Decimal;
        imagem?: Buffer;
    }): Promise<ProdutoModel>;
    atualizarProduto(produtoDadosAlterar: {
        descricao: string;
        custo?: Decimal;
        imagem?: Buffer;
    }, id: string): Promise<ProdutoModel>;
    removerProduto(id: string): Promise<ProdutoModel>;
}
