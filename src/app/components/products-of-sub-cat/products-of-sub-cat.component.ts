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
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.prdService.getPrdBySubCatID(id || '').subscribe((data: any) => {
      this.prdList = data;
      console.log(data[0].subcategory.name);
    });
  }
  sort(event: any) {
    switch (event.target.value) {
      case 'Low': {
        this.prdList = this.prdList.sort(
          (low: any, high: any) => low.price - high.price
        );
        break;
      }

      case 'High': {
        this.prdList = this.prdList.sort(
          (low: any, high: any) => high.price - low.price
        );
        break;
      }

      case 'Name': {
        this.prdList = this.prdList.sort(function (low: any, high: any) {
          if (low.name < high.name) {
            return -1;
          } else if (low.name > high.name) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      }

      default: {
        this.prdList = this.prdList.sort(
          (low: any, high: any) => low.price - high.price
        );
        break;
      }
    }
    return this.prdList;
  }
  ngOnInit(): void {
    this.getPrdBySubCatID();
  }
}
