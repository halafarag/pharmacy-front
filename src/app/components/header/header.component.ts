import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { Subcategory } from 'src/app/models/subcategory';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartList: Cart | any;
  catList: Category | any;
  prdList: Product | any;
  id: string | any;
  userName: string | any;
  subList: Subcategory | any;
  searchText: any;
  constructor(
    private cartService: CartService,
    private userServic: UserService,
    private router: Router,
    private catService: CategoryService,
    private subServic: SubcategoryService
  ) {}
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
  getCartByUserID() {
    this.id = localStorage.getItem('id');
    this.cartService.getCartByUserID(this.id || '').subscribe((data: any) => {
      this.cartList = data;
    });
  }
  logout() {
    this.id = localStorage.getItem('id');
    this.userServic.logout(this.id || '').subscribe(() => {
      localStorage.clear();
      this.router.navigate(['/main/home']);
    });
  }
  getAllCategory() {
    this.catService.getAllCategory().subscribe((data: Category) => {
      this.catList = data;
    });
  }
  // getPrdByCatID(id: string) {
  //   this.prdServic.getPrdByCatID(id || '').subscribe((data) => {
  //     this.prdList = data;
  //     console.log(data);
  //   });
  // }
  getSubByCatID(catID: string) {
    this.subServic.getAllSubOfCategory(catID || '').subscribe((data) => {
      this.subList = data;
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.getCartByUserID();
    this.getAllCategory();
    this.userName = localStorage.getItem('userName')?.slice(0, 5);
  }
}
