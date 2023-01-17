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
  prdList: any;

  constructor(
    private catService: CategoryService,
    private prdService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  getAllCategory() {
    this.catService.getAllCategory().subscribe((data: Category) => {
      this.catList = data;
      console.log(this.catList);
    });
  }

  // getPrdByCatID(cat: any) {
  //   this.prdService.getPrdByCatID(cat._id || '').subscribe((data: Product) => {
  //     this.prdList = data;
  //     console.log(data);
  //   });
  // }
  getPrdByCatID(catID: Category) {
    this.router.navigate([`/main/subCategory/${catID._id}`]);
    window.scrollTo(0, 0);
    console.log(catID._id);
  }
  ngOnInit(): void {
    this.getAllCategory();
  }
}
