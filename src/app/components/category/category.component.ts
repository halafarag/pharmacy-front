import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  catList: any;
  constructor(private catService: CategoryService) {}
  getAllCategory() {
    this.catService.getAllCategory().subscribe((data: any) => {
      this.catList = data;
      console.log(data);
    });
  }
}
