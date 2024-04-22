import { Loja as LojaModel } from '@prisma/client';
import { LojaService } from 'src/services/loja.service';
export declare class LojaController {
    private readonly lojaService;
    constructor(lojaService: LojaService);
    getListaLojas(): Promise<LojaModel[]>;
    getLojaById(id: string): Promise<LojaModel>;
    criarLoja(lojaDados: {
        descricao: string;
    }): Promise<LojaModel>;
    atualizarLoja(lojaDadosAlterar: {
        descricao: string;
    }, id: string): Promise<LojaModel>;
    removerLoja(id: string): Promise<LojaModel>;
}
