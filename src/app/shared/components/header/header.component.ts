import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService,private router: Router) { }
  goToBrand(brand:String):void{
    this.router.navigate(['/buy-a-watch'], { queryParams: { 
      brand : brand,
      mechanism :"" ,
      condition :"" ,
      year :"" ,
      strap : "",
      strap_color:"" ,
      carcase :"" ,
      carcase_form : "",
      carcase_thickness :"" ,
      water_resistence : "",
      carcase_color : "",
      alarm :"" ,
      timer : "",
      gender : "",
    price_min:"",
  price_max:""
},queryParamsHandling: 'merge' });
  }
  ngOnInit(): void {
  }

}
