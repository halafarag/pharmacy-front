import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroment/Enviroment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getPrdByCatID(catID: string): Observable<Product> {
    return this.http.get<Product>(
      `${enviroment.apiBaseUrl}/product/category/${catID}`
    );
  }
  getPrdBySubCatID(subID: string): Observable<Product> {
    return this.http.get<Product>(
      `${enviroment.apiBaseUrl}/product/subcat/${subID}`
    );
  }
  getProductByID(id: string): Observable<Product> {
    return this.http.get<Product>(`${enviroment.apiBaseUrl}/product/${id}`);
  }
  getAllPrds(page: number): Observable<Product> {
    return this.http.get<Product>(
      `${enviroment.apiBaseUrl}/product?page=${page}`
    );
  }
}
