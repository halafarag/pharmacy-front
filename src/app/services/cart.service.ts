import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
      `http://localhost:8081/cart`,
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
      `http://localhost:8081/cart/${id}`,
      this.httpOPtions
    );
  }
  deleteCart(id: string) {
    return this.http.delete(
      `http://localhost:8081/cart/${id}`,
      this.httpOPtions
    );
  }
}
