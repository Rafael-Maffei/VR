import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product-model';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ProductService,
    StoreService
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.less'
})

export class CreateProductComponent {

  product: Product = {
    descricao: '',
    custo: null,
    imagem: null
  };

  private productService = inject(ProductService)
  private router = inject(Router)

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe();
    this.router.navigate(['/produto']);
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.product.id).subscribe();
  }
}
