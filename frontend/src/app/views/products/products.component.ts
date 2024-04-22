import { Component, inject, } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FilterProductsComponent } from '../../components/filter-products/filter-products.component';
import { ProductsListTableComponent } from '../../components/products-list-table/products-list-table.component';
import { ProductService } from '../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderService } from '../../components/header/header.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    HeaderComponent,
    FilterProductsComponent,
    ProductsListTableComponent,
  ],
  providers: [
    ProductService,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.less'
})

export class ProductsComponent {
  constructor(private productService: ProductService, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Consulta de Produto',
      icon: 'add',
      routeUrl: '/produto/cadastro'
    }
  }

  ngOnInit(): void {
    this.receiveProducts()
  }
  
  public receiveProducts = toSignal(this.productService.getProducts())  
}
