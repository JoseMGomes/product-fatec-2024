import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  delete(product: Product): Observable<void> {
    return this.http.delete<void>(
      'http://localhost:3000/products/' + product.id
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:3000/products/' + id);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>('http://localhost:3000/products/' + product.id, product);
  }
}
