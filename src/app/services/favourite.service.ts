import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroment/Enviroment';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private httpOPtions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: localStorage.getItem('accessToken')!,
    }),
  };

  constructor(private http: HttpClient) {}
  addToFav(productId: string, userId: string) {
    return this.http.post(
      `${enviroment.apiBaseUrl}/fav`,
      { productId, userId },
      this.httpOPtions
    );
  }
  removeFav(favId: string) {
    return this.http.delete(
      `${enviroment.apiBaseUrl}/fav/${favId}`,
      this.httpOPtions
    );
  }
}
