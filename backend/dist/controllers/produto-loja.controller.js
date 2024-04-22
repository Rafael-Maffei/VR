"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoLojaController = void 0;
const common_1 = require("@nestjs/common");
const produto_loja_service_1 = require("../services/produto-loja.service");
let ProdutoLojaController = class ProdutoLojaController {
    constructor(produtoLojaService) {
        this.produtoLojaService = produtoLojaService;
    }
    async getListaProdutoLojas() {
        return this.produtoLojaService.buscarTodosProdutoLoja({
            orderBy: { idLoja: 'asc' },
        });
    }
    async criarProdutoLoja(produtoLojaDados) {
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
    async atualizarPreco(produtoLojaDadosAlterar, produtoId, lojaId) {
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
    async removerLoja(produtoId, lojaId) {
        return this.produtoLojaService.deletarProdutoLoja({
            idProduto_idLoja: {
                idProduto: produtoId,
                idLoja: lojaId,
            },
        });
    }
};
exports.ProdutoLojaController = ProdutoLojaController;
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoLojaController.prototype, "getListaProdutoLojas", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProdutoLojaController.prototype, "criarProdutoLoja", null);
__decorate([
    (0, common_1.Put)(':produtoId/:lojaId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('produtoId')),
    __param(2, (0, common_1.Param)('lojaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], ProdutoLojaController.prototype, "atualizarPreco", null);
__decorate([
    (0, common_1.Delete)(':produtoId/:lojaId'),
    __param(0, (0, common_1.Param)('produtoId')),
    __param(1, (0, common_1.Param)('lojaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProdutoLojaController.prototype, "removerLoja", null);
exports.ProdutoLojaController = ProdutoLojaController = __decorate([
    (0, common_1.Controller)('produto-loja'),
    __metadata("design:paramtypes", [produto_loja_service_1.ProdutoLojaService])
], ProdutoLojaController);
//# sourceMappingURL=produto-loja.controller.js.map