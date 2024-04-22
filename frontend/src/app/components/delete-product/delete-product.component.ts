import { Component, inject } from '@angular/core';
import { Product } from '../../models/product-model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [    
    ProductService,
  ],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.less'
})
export class DeleteProductComponent {

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

  deleteProduct(): void {
    this.productService.deleteProduct(this.product.id).subscribe();
    this.router.navigate(['/produto']);
  }

  cancel(): void {
    this.router.navigate(['/produto']);
  }
}
