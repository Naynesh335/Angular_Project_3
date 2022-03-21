import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../jsondata.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public ds:JsondataService) { }

  productData:any;

  ngOnInit(): void {
    this.ds.getProductData().subscribe((data) => this.fatchProductData(data));

  }

  fatchProductData(data:any)
  {
    this.productData=data;
    console.log(this.productData);
  }

}
