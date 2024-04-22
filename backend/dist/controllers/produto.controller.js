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
exports.ProdutoController = void 0;
const common_1 = require("@nestjs/common");
const produto_service_1 = require("../services/produto.service");
const library_1 = require("@prisma/client/runtime/library");
let ProdutoController = class ProdutoController {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    async buscarLista() {
        return this.produtoService.buscarTodosProdutos({
            orderBy: { id: 'asc' },
        });
    }
    async buscarPorId(id) {
        return this.produtoService.buscarProduto({ id: Number(id) });
    }
    async buscarPorDescricao(searchString) {
        return this.produtoService.buscarTodosProdutos({
            where: {
                descricao: { contains: searchString },
            },
        });
    }
    async buscarPorCusto(custoDigitado) {
        return this.produtoService.buscarTodosProdutos({
            where: {
                custo: custoDigitado,
            },
        });
    }
    async criarProduto(produtoDados) {
        const { descricao, custo, imagem } = produtoDados;
        return this.produtoService.criarProduto({
            descricao,
            custo,
            imagem,
        });
    }
    async atualizarProduto(produtoDadosAlterar, id) {
        const { descricao, custo, imagem } = produtoDadosAlterar;
        return this.produtoService.atualizarProduto({
            where: { id: Number(id) },
            data: { descricao, custo, imagem },
        });
    }
    async removerProduto(id) {
        return this.produtoService.deletarProduto({ id: Number(id) });
    }
};
exports.ProdutoController = ProdutoController;
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "buscarLista", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Get)(':searchString'),
    __param(0, (0, common_1.Param)('searchString')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "buscarPorDescricao", null);
__decorate([
    (0, common_1.Get)(':searchCost'),
    __param(0, (0, common_1.Param)('searchCost')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [library_1.Decimal]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "buscarPorCusto", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "criarProduto", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "atualizarProduto", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "removerProduto", null);
exports.ProdutoController = ProdutoController = __decorate([
    (0, common_1.Controller)('produto'),
    __metadata("design:paramtypes", [produto_service_1.ProdutoService])
], ProdutoController);
//# sourceMappingURL=produto.controller.js.map