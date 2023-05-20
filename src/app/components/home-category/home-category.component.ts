import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss'],
})
export class HomeCategoryComponent implements OnInit {
  catList: any;
  constructor(
    private catService: CategoryService,
    private prdService: ProductService,
    private router: Router
  ) {}
  getPrdByCatID(catID: Category) {
    this.router.navigate([`/main/subCategory/${catID._id}`]);
    window.scrollTo(0, 0);
    // console.log(catID._id);
  }
  getAllCategory() {
    this.catService.getAllCategory().subscribe((data: Category) => {
      this.catList = data;
      // console.log(this.catList);
    });
  }
  ngOnInit(): void {
    this.getAllCategory();
  }
}
