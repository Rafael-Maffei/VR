import { ProdutoLoja as ProdutoLojaModel } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { ProdutoLojaService } from 'src/services/produto-loja.service';
export declare class ProdutoLojaController {
    private readonly produtoLojaService;
    constructor(produtoLojaService: ProdutoLojaService);
    getListaProdutoLojas(): Promise<ProdutoLojaModel[]>;
    criarProdutoLoja(produtoLojaDados: {
        idProduto: number;
        idLoja: number;
        preco: Decimal;
    }): Promise<ProdutoLojaModel>;
    atualizarPreco(produtoLojaDadosAlterar: {
        preco: Decimal;
    }, produtoId: number, lojaId: number): Promise<ProdutoLojaModel>;
    removerLoja(produtoId: number, lojaId: number): Promise<ProdutoLojaModel>;
}
