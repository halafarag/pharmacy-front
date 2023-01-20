import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroment/Enviroment';
import { Subcategory } from '../models/subcategory';

@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {
  constructor(private http: HttpClient) {}
  getAllSubOfCategory(catID: string) {
    return this.http.get(`${enviroment.apiBaseUrl}/subcat/category/${catID}`);
  }
}
