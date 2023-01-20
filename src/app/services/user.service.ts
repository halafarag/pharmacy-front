import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroment/Enviroment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  //REGISTER
  register(user: User): Observable<User> {
    return this.http.post<User>(
      `${enviroment.apiBaseUrl}/users/register`,
      user
    );
  }
  //LOGIN
  login(user: User): Observable<User> {
    return this.http.post<User>(`${enviroment.apiBaseUrl}/users/login`, user);
  }
  // LOGOUT
  logout(id: string) {
    return this.http.get(`${enviroment.apiBaseUrl}/users/logout/${id}`);
  }
}
