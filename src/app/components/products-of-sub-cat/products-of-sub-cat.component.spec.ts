import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOfSubCatComponent } from './products-of-sub-cat.component';

describe('ProductsOfSubCatComponent', () => {
  let component: ProductsOfSubCatComponent;
  let fixture: ComponentFixture<ProductsOfSubCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsOfSubCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsOfSubCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
