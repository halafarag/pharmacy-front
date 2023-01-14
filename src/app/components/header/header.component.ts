import { Component, HostListener } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartList: Cart | any;
  constructor(private cartService: CartService) {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // let element = document.querySelector('.background') as HTMLElement;
    // let element3 = window.document.getElementsByClassName(
    //   'ahmed'
    // ) as HTMLCollection;
    // console.log(element3);
    // if (window.pageYOffset > element.clientHeight) {
    //   element.classList.add('bg-light');
    //   Array.from(element3).forEach((i) => {
    //     i.classList.replace('text-white', 'text-success');
    //   });
    // } else {
    //   element.classList.remove('bg-light');
    //   Array.from(element3).forEach((i) => {
    //     i.classList.replace('text-success', 'text-white');
    //   });
    // }
  }
  // getCartByUserID() {
  //   const id = localStorage.getItem('id');
  //   this.cartService.getCartByUserID(id || '').subscribe((data: any) => {
  //     this.cartList = data;
  //     console.log(this.cartList);
  //   });
  // }
  ngOnInit(): void {
    // this.getCartByUserID();
  }
}
