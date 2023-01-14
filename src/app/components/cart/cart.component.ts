import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartList: Cart | any;
  constructor(private cartService: CartService) {}
  getCartByUserID() {
    const id = localStorage.getItem('id');
    this.cartService.getCartByUserID(id || '').subscribe((data) => {
      this.cartList = data;
      console.log(data);
    });
  }
  remove(id: string) {
    console.log(id);
    this.cartService.deleteCart(id || '').subscribe((cart) => {
      this.ngOnInit();
      window.scrollTo(0, 0);
    });
  }
  ngOnInit() {
    this.getCartByUserID();
  }
}
