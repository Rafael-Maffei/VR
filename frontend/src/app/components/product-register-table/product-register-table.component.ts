import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { Store } from '../../models/store-model';
import { CommonModule } from '@angular/common';
import { ProductStore } from '../../models/product-store-model';
import { StoreDescriptionByIdPipe } from '../../pipes/store-descriptionById.pipe';

@Component({
  selector: 'app-product-register-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    StoreDescriptionByIdPipe
  ],
  providers: [
    StoreService
  ],
  templateUrl: './product-register-table.component.html',
  styleUrl: './product-register-table.component.less'
})
export class ProductRegisterTableComponent {

  constructor(private router: Router) {}

  @Input() listStores: Store[] | undefined = []
  @Input() listProductStore: ProductStore[] | undefined = []

}
