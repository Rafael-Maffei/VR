import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl: string = 'http://127.0.0.1:3000/produto'

  private http = inject(HttpClient)

  public createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productUrl, product)
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
  }

  public getProductById(id: number): Observable<Product> {
    const url = `${this.productUrl}/${id}`
    return this.http.get<Product>(url)
  }

  public getProductByDescription(description: string): Observable<Product> {
    const url = `${this.productUrl}/${description}`
    return this.http.get<Product>(url)
  }

  public getProductByCost(cost: number): Observable<Product> {
    const url = `${this.productUrl}/${cost}`
    return this.http.get<Product>(url)
  }

  public updateProduct(product: Product): Observable<Product> {
    const url = `${this.productUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  public deleteProduct(id: number): Observable<Product> {
    const url = `${this.productUrl}/${id}`
    return this.http.delete<Product>(url)
  }
}
