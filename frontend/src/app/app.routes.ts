import { Routes } from '@angular/router';

import { ProductRegisterComponent } from './views/product-register/product-register.component';
import { ProductsComponent } from './views/products/products.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { ProductUpdateComponent } from './views/product-update/product-update.component';

export const routes: Routes = [
  {
        path: "produto",
        children: [
          {
            path: "",
            component: ProductsComponent,
          },
          {
            path: "cadastro",
            component: ProductRegisterComponent,
          },
          {
            path: "cadastro/:id",
            component: ProductUpdateComponent
          },
          {
            path: "delete/:id",
            component: DeleteProductComponent
          }
        ]
      },
    ]  