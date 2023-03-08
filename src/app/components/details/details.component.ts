import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  product: Product | any;
  constructor(
    private prdService: ProductService,
    private activateRoute: ActivatedRoute
  ) {}
  getProductByID() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.prdService.getProductByID(id || '').subscribe((data) => {
      this.product = data;
      // console.log(data);
    });
  }
  // thumbImage =
  //   'https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg';
  // fullImage =
  //   'https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg';
  ngOnInit(): void {
    this.getProductByID();
  }
}
