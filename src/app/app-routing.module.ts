import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCategoryComponent } from './components/subCategory/subCategory.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsOfSubCatComponent } from './components/products-of-sub-cat/products-of-sub-cat.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/home', pathMatch: 'full' },

  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'subCategory/:id', component: SubCategoryComponent },
      { path: 'productOfSub', component: ProductsOfSubCatComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
