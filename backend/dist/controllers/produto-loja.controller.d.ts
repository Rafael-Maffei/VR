import { ProdutoLoja as ProdutoLojaModel } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { ProdutoLojaService } from 'src/services/produto-loja.service';
export declare class ProdutoLojaController {
    private readonly produtoLojaService;
    constructor(produtoLojaService: ProdutoLojaService);
    getListaProdutoLojas(produtoId: number): Promise<ProdutoLojaModel[]>;
    criarProdutoLoja(produtoLojaDados: {
        idProduto: number;
        idLoja: number;
        preco: number;
    }): Promise<ProdutoLojaModel>;
    atualizarPreco(produtoLojaDadosAlterar: {
        id: number;
        preco: Decimal;
    }, produtoId: number): Promise<ProdutoLojaModel>;
    removerLoja(produtoLojaDadosDeletar: {
        id: number;
    }, lojaId: number): Promise<ProdutoLojaModel>;
}
