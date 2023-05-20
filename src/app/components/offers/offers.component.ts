import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent {
  prdList: Product | any;
  selectPage: number = 1;
  constructor(
    private catService: CategoryService,
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
    // console.log(id);
    this.router.navigate(['main/details', id]);
  }
  ngOnInit(): void {
    this.getAllProducts();
  }
}
