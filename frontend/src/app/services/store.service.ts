import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '../models/store-model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  storeUrl: string = 'http://127.0.0.1:3000/loja'

  private http = inject(HttpClient)
  
  public getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.storeUrl)
  }
}
