import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  //REGISTER
  register(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8081/users/register', user);
  }
  //LOGIN
  login(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8081/users/login`, user);
  }
}
