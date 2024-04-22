import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product-model';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ProductService,
    StoreService
  ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.less'
})

export class UpdateProductComponent {

  product: Product

  private productService = inject(ProductService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(Number(id)).subscribe(product => {
        this.product = product;
      });
  }
  
  updateProduct(): void {    
    this.productService.updateProduct(this.product).subscribe(() => {
      this.router.navigate(['/produto']);
    });
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.product.id).subscribe();
    this.router.navigate(['/produto']);
  }
}