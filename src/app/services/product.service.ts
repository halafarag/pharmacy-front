import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getPrdByCatID(catID: string): Observable<Product> {
    return this.http.get<Product>(
      `http://localhost:8081/product/category/${catID}`
    );
  }
}
