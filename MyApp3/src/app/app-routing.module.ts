import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { CusomerLoginComponent } from './cusomer-login/cusomer-login.component';
import { CustomerComponent } from './customer/customer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'CusomerLogin',component:CusomerLoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'customer',component:CustomerComponent},
  {path:'product',component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
