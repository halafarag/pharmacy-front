import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-of-sub-cat',
  templateUrl: './products-of-sub-cat.component.html',
  styleUrls: ['./products-of-sub-cat.component.scss'],
})
export class ProductsOfSubCatComponent {
  prdList: Product | any;
  constructor(
    private prdService: ProductService,
    private activateRoute: ActivatedRoute,
    private cartService: CartService
  ) {}
  // GET PRODUCTS FOR SPECIFIC SUBCATEGORY (get product by sub id)
  getPrdBySubCatID() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.prdService.getPrdBySubCatID(id || '').subscribe((data: any) => {
      this.prdList = data;
      // console.log(data[0].subcategory.name);
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
  // ADD TO CART
  public user = localStorage.getItem('id');
  addToCart(prd: any, user: any, amount: any) {
    if (user) {
      this.cartService.addToCart(prd, user, amount).subscribe({
        next: (cart) => {
          // console.log(cart);
        },
        error: (err) => {
          // console.log(err);
        },
        complete: () => {
          this.ngOnInit();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product added to your cart sucsessfully ',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      alert('You Must Login First');
    }
  }
  ngOnInit(): void {
    this.getPrdBySubCatID();
  }
}
