import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedSub: BehaviorSubject<boolean>;

  constructor() {
    this.isLoggedSub = new BehaviorSubject<boolean>(this.isUserLog);
  }
  get isUserLog(): boolean {
    return localStorage.getItem('accessToken') ? true : false;
  }
}
