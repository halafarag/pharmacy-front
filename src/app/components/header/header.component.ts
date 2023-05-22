import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { Subcategory } from 'src/app/models/subcategory';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
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
  userName: string | undefined;
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
      this.ngOnInit();
    });
  }
  getAllCategory() {
    this.catService.getAllCategory().subscribe((data: Category) => {
      this.catList = data;
    });
  }
  ngOnInit(): void {
    this.getCartByUserID();
    this.getAllCategory();
    this.userName = localStorage.getItem('userName')?.slice(0, 5);
  }
}
