import { Component } from '@angular/core';
import { ProductRegisterTableComponent } from '../../components/product-register-table/product-register-table.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../../components/header/header.component';
import { StoreService } from '../../services/store.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { HeaderService } from '../../components/header/header.service';
import { ProductStoreService } from '../../services/productStore.service';
import { UpdateProductComponent } from '../../components/update-product/update-product.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    HeaderComponent,
    UpdateProductComponent,
    ProductRegisterTableComponent
  ],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.less'
})
export class ProductUpdateComponent {

  constructor(
    private storeService: StoreService,
    private headerService: HeaderService,
    private productStoreService: ProductStoreService,
    private route: ActivatedRoute
  ) {
    headerService.headerData = {
      title: 'Atualização de Produto',
      icon: 'home',
      routeUrl: '/produto'
    }
  }
    
  public receiveStores = toSignal(this.storeService.getStores());

  private id = this.route.snapshot.paramMap.get('id');
  public receiveProductStore = toSignal(this.productStoreService.getProductStore(Number(this.id)));
}
