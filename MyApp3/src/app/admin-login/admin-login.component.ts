import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public fb: FormBuilder,public router: Router) { }


  adminFormData: any;
  submitted = false;
  alertmsg = false;

  ngOnInit(): void {

    this.adminFormData = this.fb.group({
      adminname: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() { return this.adminFormData.controls; }

  verify()
  {
    this.submitted = true;
    if (this.adminFormData.invalid) {
      return;
    }
    
    if (this.adminFormData.value.adminname =='admin' && this.adminFormData.value.password =='admin') {
      console.log(this.adminFormData.value.username);
      this.router.navigateByUrl('/admin');
    }
  }

  closealert() {
    this.adminFormData.reset({});
    this.alertmsg = false;
    this.submitted = false;
  }
}
