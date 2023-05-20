import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { Subcategory } from 'src/app/models/subcategory';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { ProductService } from 'src/app/services/product.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import Swal from 'sweetalert2';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-subCategory',
  templateUrl: './subCategory.component.html',
  styleUrls: ['./subCategory.component.scss'],
})
export class SubCategoryComponent implements OnInit {
  prdList: Product | any;
  subList: Subcategory | any;
  cartList: Cart | any;
  searchPrd: Product | any;
  searchText: any;
  id: string = '';

  constructor(
    private prdService: ProductService,
    private activatedroute: ActivatedRoute,
    private subService: SubcategoryService,
    private router: Router,
    private cartService: CartService,
    private favService: FavouriteService
  ) {}

  // DESPLAY ALL PRODUCTS FOR SPECFIC CATEGORY IN CARD (get product by cat id)
  getPrdByCatID() {
    this.prdService.getPrdByCatID(this.id || '').subscribe((data: any) => {
      this.prdList = data;
      // console.log(data);
    });
  }
  // DISPLAY SUBCATEGREIES FOR THIS CATEGORY in header
  getSubOfCategory() {
    this.subService
      .getAllSubOfCategory(this.id || '')
      .subscribe((data: any) => {
        this.subList = data;
      });
  }
  // DESPLAY PRODUCT FOR THIS SUB
  getPrdOfSubID(subId: Product) {
    // console.log(subId);
    this.router.navigate([`/main/productOfSub/${subId._id}`]);
    window.scrollTo(0, 0);
  }
  //PRODUCT DETAILS
  getPrdDetails(prd: Product) {
    this.router.navigate([`/main/details/${prd._id}`]);
    window.scrollTo(0, 0);
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

  ngOnInit() {
    this.activatedroute.params.subscribe({
      next: (val) => {
        this.id = val['id'];
        this.getPrdByCatID();
        this.getSubOfCategory();
      },
    });
  }
}
