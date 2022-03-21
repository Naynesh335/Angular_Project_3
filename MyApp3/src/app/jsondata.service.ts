import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JsondataService {

  constructor(private ht: HttpClient) { }

  customerData = " http://localhost:3000/customer_details/";
  productData = " http://localhost:3000/product/";

  logintype='';

  getCustomerData()
  {
    return this.ht.get(this.customerData);
  }
  getProductData()
  {
    return this.ht.get(this.productData);
  }
}
