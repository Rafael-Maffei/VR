import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, inject } from '@angular/core';
import { Product } from '../../models/product-model';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-list-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
  ],
  providers: [
    ProductService
  ],
  templateUrl: './products-list-table.component.html',
  styleUrl: './products-list-table.component.less'
})
export class ProductsListTableComponent {

  constructor(private router: Router) {}

  @Input() list: Product[] | undefined = []

  navigateToProductEdit(): void {    
    this.router.navigate(['produto/cadastro'])
  }

  private productService = inject(ProductService)
}
