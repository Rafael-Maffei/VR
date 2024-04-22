import { Module } from '@nestjs/common';
// import { CorsModule } from '@nestjs/platform-express';
import { PrismaService } from './services/prisma.service';
import { ProdutoController } from './controllers/produto.controller';
import { ProdutoService } from './services/produto.service';
import { LojaService } from './services/loja.service';
import { LojaController } from './controllers/loja.controller';
import { ProdutoLojaService } from './services/produto-loja.service';
import { ProdutoLojaController } from './controllers/produto-loja.controller';

@Module({
  imports: [
    // CorsModule.forRoot({
    //   origin: false
    // })
  ],
  controllers: [ProdutoController, LojaController, ProdutoLojaController],
  providers: [PrismaService, ProdutoService, LojaService, ProdutoLojaService],
})
export class AppModule {}
