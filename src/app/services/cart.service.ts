import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroment/Enviroment';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private httpOPtions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: localStorage.getItem('accessToken')!,
    }),
  };
  constructor(private http: HttpClient) {}
  addToCart(product: any, user: any, amount: number): Observable<Cart> {
    return this.http.post<Cart>(
      `${enviroment.apiBaseUrl}/cart`,
      {
        product,
        user,
        amount,
      },
      this.httpOPtions
    );
  }
  getCartByUserID(id: string): Observable<Cart> {
    return this.http.get<Cart>(
      `${enviroment.apiBaseUrl}/cart/${id}`,
      this.httpOPtions
    );
  }
  deleteCart(id: string) {
    return this.http.delete(
      `${enviroment.apiBaseUrl}/cart/${id}`,
      this.httpOPtions
    );
  }
}
