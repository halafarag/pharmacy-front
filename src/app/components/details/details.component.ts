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
    const id = this.activateRoute.snapshot.paramMap.get('_id');
    this.prdService.getProductByID(id || '').subscribe((data) => {
      this.product = data;
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.getProductByID();
  }
}
