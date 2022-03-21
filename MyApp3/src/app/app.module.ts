import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CusomerLoginComponent } from './cusomer-login/cusomer-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductComponent,
    CustomerComponent,
    LandingPageComponent,
    AdminLoginComponent,
    CusomerLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
