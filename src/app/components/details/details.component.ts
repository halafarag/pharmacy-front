import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { FavouriteService } from 'src/app/services/favourite.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  product: Product | any;
  favList: any[] = [];
  isFav: boolean = false;
  constructor(
    private prdService: ProductService,
    private activateRoute: ActivatedRoute,
    private favService: FavouriteService
  ) {}
  getProductByID() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.prdService.getProductByID(id || '').subscribe((data) => {
      this.product = data;
      // console.log(data._id);
    });
  }
  addFav() {
    const userId = localStorage.getItem('id');
    const prdId = this.activateRoute.snapshot.paramMap.get('id');

    this.isFav = !this.isFav;
    // console.log(userId, prdId);
    // this.isFav = !this.isFav;
    // if (this.isFav) {
    //   this.favService.addToFav(prdId || '', userId || '').subscribe({
    //     next: (fav) => {
    //       console.log(fav);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //       alert('this item already in favorites.');
    //     },
    //     complete: () => {
    //       Swal.fire({
    //         position: 'top-end',
    //         icon: 'success',
    //         title: 'Product added to your favs sucsessfully ',
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     },
    //   });
    // } else {
    //   this.favService.removeFav(userId || '').subscribe((favs) => {
    //     this.ngOnInit();
    //   });
    // }
    if (this.isFav) {
      this.isFav = true;
      if ('favourite' in localStorage) {
        this.favList = JSON.parse(localStorage.getItem('favourite')!);
        const existProduct = this.favList.find((item) => item.prdId == prdId);
        // console.log(this.favList);
        if (existProduct) {
          this.isFav = true;
          alert('this product is already in your favourite');
        } else {
          this.isFav = true;
          this.favList.push({ prdId, userId });
          localStorage.setItem('favourite', JSON.stringify(this.favList));
        }
      } else {
        this.isFav = true;
        this.favList.push({ prdId, userId });
        localStorage.setItem('favourite', JSON.stringify(this.favList));
      }
    } else {
      this.favList.pop();
      this.isFav = false;
      alert('this product is already deleted');
      localStorage.setItem('favourite', JSON.stringify(this.favList));
    }
  }
  ngOnInit(): void {
    this.getProductByID();
  }
}
