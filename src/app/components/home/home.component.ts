import { Component, HostListener } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  catList: any;
  constructor(private catService: CategoryService) {}
  getAllCategory() {
    this.catService.getAllCategory().subscribe((data: Category) => {
      this.catList = data;
    });
  }
  ngOnInit(): void {
    this.getAllCategory();
  }
}
