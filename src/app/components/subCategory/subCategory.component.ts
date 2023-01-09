import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { Subcategory } from 'src/app/models/subcategory';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-subCategory',
  templateUrl: './subCategory.component.html',
  styleUrls: ['./subCategory.component.scss'],
})
export class SubCategoryComponent {
  catList: any;
  prdList: Product | any;
  subList: any;
  constructor(
    private catService: CategoryService,
    private prdService: ProductService,
    private activatedroute: ActivatedRoute,
    private subService: SubcategoryService
  ) {}
  // getAllCategory() {
  //   this.catService.getAllCategory().subscribe((data: any) => {
  //     this.catList = data;
  //     console.log(data);
  //   });
  // }
  //
  // DESPLAY ALL PRODUCTS FOR SPECFIC CATEGORY IN CARD
  getPrdByCatID() {
    const id = this.activatedroute.snapshot.paramMap.get('_id');
    this.prdService.getPrdByCatID(id || '').subscribe((data: Product) => {
      this.prdList = data;
      console.log(id);
      console.log(data);
    });
  }
  // DISPLAY SUBCATEGREIES FOR THIS CATEGORY
  getSubOfCategory() {
    const id = this.activatedroute.snapshot.paramMap.get('_id');
    this.subService.getAllSubOfCategory(id || '').subscribe((data: any) => {
      this.subList = data;
      // console.log(data);
    });
  }
  ngOnInit() {
    this.getPrdByCatID();
    this.getSubOfCategory();
  }
}
