import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.less'
})
export class FilterProductsComponent {

  product: Product = {
    descricao: '',
    custo: null,
    imagem: null
  };

  private productService = inject(ProductService)

  productsById(): void {
    this.productService.getProductById(this.product.id).subscribe();
  }

  productsByDescription(): void {
    this.productService.getProductByDescription(this.product.descricao).subscribe();
  }

  productsByCost(): void {
    this.productService.getProductByCost(this.product.custo).subscribe();
  }

}
