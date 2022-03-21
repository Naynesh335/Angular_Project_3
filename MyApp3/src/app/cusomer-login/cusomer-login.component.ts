import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cusomer-login',
  templateUrl: './cusomer-login.component.html',
  styleUrls: ['./cusomer-login.component.css']
})
export class CusomerLoginComponent implements OnInit {

  constructor(public fb: FormBuilder,public router: Router) { }

  customerFormData: any;
  submitted = false;
  alertmsg = false;

  ngOnInit(): void {

    this.customerFormData = this.fb.group({
      customername: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  verify()
  {
    
    
    if (this.customerFormData.value.customername =='customer' && this.customerFormData.value.password =='customer') {
      this.router.navigateByUrl('/customer');
    }
  }

  

}
