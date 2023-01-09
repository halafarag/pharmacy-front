import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  prdList: Product | any;
  subList: Subcategory | any;
  constructor(
    private prdService: ProductService,
    private activatedroute: ActivatedRoute,
    private subService: SubcategoryService,
    private router: Router
  ) {}

  // DESPLAY ALL PRODUCTS FOR SPECFIC CATEGORY IN CARD (get product by cat id)
  getPrdByCatID() {
    const id = this.activatedroute.snapshot.paramMap.get('_id');
    this.prdService.getPrdByCatID(id || '').subscribe((data: any) => {
      this.prdList = data;
      console.log(data);
      console.log(data[0].category.name);
    });
  }
  // DISPLAY SUBCATEGREIES FOR THIS CATEGORY in header
  getSubOfCategory() {
    const id = this.activatedroute.snapshot.paramMap.get('_id');
    this.subService.getAllSubOfCategory(id || '').subscribe((data: any) => {
      this.subList = data;
      // console.log(data);
      // console.log(data[0].category.name);
    });
  }
  // DESPLAY PRODUCT FOR THIS SUB
  getPrdOfSubID(subId: string) {
    this.router.navigate(['/main/productOfSub', subId]);
    window.scrollTo(0, 0);
  }
  //PRODUCT DETAILS
  getPrdDetails(prd: string) {
    this.router.navigate(['/main/details', prd]);
    window.scrollTo(0, 0);
  }
  ngOnInit() {
    this.getPrdByCatID();
    this.getSubOfCategory();
  }
}
