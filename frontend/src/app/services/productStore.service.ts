import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductStore } from '../models/product-store-model';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {

  productStoreUrl: string = 'http://127.0.0.1:3000/produto-loja'

  private http = inject(HttpClient)
  
  public getProductStore(): Observable<ProductStore[]> {
    return this.http.get<ProductStore[]>(this.productStoreUrl)
  }
}