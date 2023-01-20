import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { enviroment } from 'src/enviroment/Enviroment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  getAllCategory(): Observable<Category> {
    return this.http.get<Category>(`${enviroment.apiBaseUrl}/category`);
  }
}
