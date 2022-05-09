import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-addproduct',
  templateUrl: './form-addproduct.component.html',
  styleUrls: ['./form-addproduct.component.css']
})
export class FormAddproductComponent implements OnInit {

  step:any = 1;
  brand_values:any = ["Timex","Fossil","Daniel Klein","Certina","COROS","Duxot","Tissot","Armani","Claude Bernard","Haemmer","Rolex","Daniel Wellington","Edox","Gant","Junkers","Roamer","Regent","Rotary","Saint Honore","Versace","Wenger","AMS","KHS","BV","BOSS","Braun","BERTHA","Casio","Constantin Dardi","Citizen"];
  strap_values:any = ["Classic","Rally","Double Ridge","Stainless Steel","Titanium","Ceramic","Canvas","Nylon","Rubber","Wood","Leather","Faux-Leather"];
  strap_color:any = ["Brown Watch Strap","Black Watch Strap","Red & Orange Watch Strap","Blue Watch Strap","Green Watch Strap"];
  condition_values:any=["Unworn","Mint","Excellent","Very Good","Good","Fair","Poor"];
  carcase_values:any=["Silver","Gold","Steel","White Gold","Ceramics"]
  carcase_color:any=["Silver","Gold","Rose Gold","Neon"];
  constructor() { }

  ngOnInit(): void {
  }

submit() {
  this.step=this.step + 1;
}
previous() {
  this.step=this.step - 1;
}

step2() {
  this.step=2;
}

step3() {
  this.step=3;
}


}


