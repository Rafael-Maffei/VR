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
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product-model';
import { ProductStoreService } from '../../services/productStore.service';
import { ProductStore } from '../../models/product-store-model';

@Component({
  selector: 'app-product-register',
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
    private productStoreService: ProductStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    headerService.headerData = {
      title: 'Cadastro de Produto',
      icon: 'home',
      routeUrl: '/produto'
    }
  }
    
  public receiveStores = toSignal(this.storeService.getStores());

  private id = this.route.snapshot.paramMap.get('id');
  public receiveProductStore = toSignal(this.productStoreService.getProductStore(+this.id));
}
