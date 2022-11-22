import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_BASE_URL = 'https://fakestoreapi.com'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(limit = 12, sort = 'desc', category?: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${STORE_BASE_URL}/products${category ? '/category/' + category : ''}?sort=${sort}&limit=${limit}`);
  }


  getAllCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${STORE_BASE_URL}/products/categories`)
  }

  getCategoryProducts(category: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${STORE_BASE_URL}/products/category/${category}`);
  }

}
