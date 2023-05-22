import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent {
  prdList: Product | any;
  selectPage: number = 1;
  constructor(
    private cartService: CartService,
    private prdService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  goNext() {
    if (this.selectPage == 10) {
      this.selectPage = 1;
    } else {
      this.selectPage++;
      this.getAllProducts();
    }
  }
  goPrevious() {
    if (this.selectPage == 1) {
      this.selectPage = 10;
    } else {
      this.selectPage--;
      this.getAllProducts();
    }
  }
  getAllProducts() {
    this.prdService.getAllPrds(this.selectPage).subscribe((data) => {
      this.prdList = data;
      // console.log(data);
    });
  }
  prdDetails(id: string) {
    console.log(id);
    this.router.navigate(['main/details', id]);
  }
  ngOnInit(): void {
    this.getAllProducts();
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
}
