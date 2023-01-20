import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  catList: any;
  prdList: Product | any;
  selectPage: number = 1;
  constructor(
    private catService: CategoryService,
    private prdService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  getAllCategory() {
    this.catService.getAllCategory().subscribe((data: Category) => {
      this.catList = data;
      // console.log(this.catList);
    });
  }
  getPrdByCatID(catID: Category) {
    this.router.navigate([`/main/subCategory/${catID._id}`]);
    window.scrollTo(0, 0);
    // console.log(catID._id);
  }
  getAllProducts() {
    this.prdService.getAllPrds(this.selectPage).subscribe((data) => {
      this.prdList = data;
      console.log(data);
    });
  }
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
  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProducts();
  }
}
