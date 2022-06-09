import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public showBrands: boolean = true;
  public showCategorii: boolean = true;
  public showModels: boolean = false;
  public showMaterials: boolean = false;
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

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
  
  toggle(str: string) {
    if (str == "categorii")
      this.showCategorii = !this.showCategorii;
    else if (str == "brands")
      this.showBrands = !this.showBrands;
    else if (str == "models")
      this.showModels = !this.showModels;
    else if (str == "materials")
      this.showMaterials = !this.showMaterials;
  }

}


