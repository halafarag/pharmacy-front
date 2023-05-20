import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SubCategoryComponent } from './components/subCategory/subCategory.component';
import { DetailsComponent } from './components/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsOfSubCatComponent } from './components/products-of-sub-cat/products-of-sub-cat.component';
import { CartComponent } from './components/cart/cart.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { SliderComponent } from './components/slider/slider.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeCategoryComponent } from './components/home-category/home-category.component';
import { OffersComponent } from './components/offers/offers.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    SubCategoryComponent,
    DetailsComponent,
    ProductsOfSubCatComponent,
    CartComponent,
    FavouriteComponent,
    AboutUsComponent,
    BlogComponent,
    SliderComponent,
    ArticlesComponent,
    HomeCategoryComponent,
    OffersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxImageZoomModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
