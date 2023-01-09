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
      // console.log(this.catList);
    });
  }

  // getPrdByCatID(cat: any) {
  //   this.prdService.getPrdByCatID(cat._id || '').subscribe((data: Product) => {
  //     this.prdList = data;
  //     console.log(data);
  //   });
  // }
  getPrdByCatID(catID: string) {
    this.router.navigate(['/main/subCategory', catID]);
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    this.getAllCategory();
  }
}
