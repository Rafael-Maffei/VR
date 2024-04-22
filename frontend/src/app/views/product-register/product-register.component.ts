import { Component, inject } from '@angular/core';
import { CreateProductComponent } from '../../components/create-product/create-product.component';
import { ProductRegisterTableComponent } from '../../components/product-register-table/product-register-table.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../../components/header/header.component';
import { StoreService } from '../../services/store.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { HeaderService } from '../../components/header/header.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product-model';
import { ProductStoreService } from '../../services/productStore.service';

@Component({
  selector: 'app-cadastro-de-produtos',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    HeaderComponent,
    CreateProductComponent,
    ProductRegisterTableComponent
  ],
  templateUrl: './product-register.component.html',
  styleUrl: './product-register.component.less'
})
export class ProductRegisterComponent {

  constructor(
    private storeService: StoreService,
    private headerService: HeaderService,
    private productStoreService: ProductStoreService
  ) {
    headerService.headerData = {
      title: 'Cadastro de Produto',
      icon: 'home',
      routeUrl: '/produto'
    }
  }
    
  public receiveStores = toSignal(this.storeService.getStores());

  public receiveProductStore = toSignal(this.productStoreService.getProductStore());
}
