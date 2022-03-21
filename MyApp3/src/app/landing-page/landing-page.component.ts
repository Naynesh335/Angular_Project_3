import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  selectuser(path:string)
  {
    if(path=="admin")
    this.router.navigate(['/','adminLogin']);
    if(path=="user")
    this.router.navigate(['/','CusomerLogin']);
      
  }
  adminimage="../assets/images/logos/adminlogo.png";
  userimage="../assets/images/logos/userlogo.png";

}
