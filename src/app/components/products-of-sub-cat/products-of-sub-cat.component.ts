import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-of-sub-cat',
  templateUrl: './products-of-sub-cat.component.html',
  styleUrls: ['./products-of-sub-cat.component.scss'],
})
export class ProductsOfSubCatComponent {
  prdList: Product | any;
  constructor(
    private prdService: ProductService,
    private activateRoute: ActivatedRoute
  ) {}
  // GET PRODUCTS FOR SPECIFIC SUBCATEGORY (get product by sub id)
  getPrdBySubCatID() {
    const id = this.activateRoute.snapshot.paramMap.get('_id');
    this.prdService.getPrdBySubCatID(id || '').subscribe((data) => {
      this.prdList = data;
      // console.log(data);
    });
  }
  ngOnInit(): void {
    this.getPrdBySubCatID();
  }
}
