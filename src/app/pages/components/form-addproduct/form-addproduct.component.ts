import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-addproduct',
  templateUrl: './form-addproduct.component.html',
  styleUrls: ['./form-addproduct.component.css']
})
export class FormAddproductComponent implements OnInit {

  // step:any = 1;
  brand_values:any = ["Timex","Fossil","Daniel Klein","Certina","COROS","Duxot","Tissot","Armani","Claude Bernard","Haemmer","Rolex","Daniel Wellington","Edox","Gant","Junkers","Roamer","Regent","Rotary","Saint Honore","Versace","Wenger","AMS","KHS","BV","BOSS","Braun","BERTHA","Casio","Constantin Dardi","Citizen"];
  strap_values:any = ["Classic","Rally","Double Ridge","Stainless Steel","Titanium","Ceramic","Canvas","Nylon","Rubber","Wood","Leather","Faux-Leather"];
  strap_color:any = ["Brown Watch Strap","Black Watch Strap","Red & Orange Watch Strap","Blue Watch Strap","Green Watch Strap"];
  condition_values:any=["Unworn","Mint","Excellent","Very Good","Good","Fair","Poor"];
  carcase_values:any=["Silver","Gold","Steel","White Gold","Ceramics"]
  carcase_color:any=["Silver","Gold","Rose Gold","Neon"];

  step: any = 1;
  submitted: any = false;
  multistep = new FormGroup({
      itemDetails:new FormGroup({
        brand: new FormControl(''),
        model: new FormControl(''),
        mechanism: new FormControl(''),
        condition: new FormControl(''),
        gender: new FormControl(''),
        year: new FormControl(''),
        strap: new FormControl(''),
        strapcolor: new FormControl(''),
        carcase: new FormControl(''),
        carcaseform: new FormControl(''),
        thickness: new FormControl(''),
        carcasecolor: new FormControl(''),
        waterresistence: new FormControl(''),
        alarm: new FormControl(''),
        timer: new FormControl(''),
        price: new FormControl(''),
        currency: new FormControl('')
      }),

      //  userDetails: new FormGroup({
      //      firstname: new FormControl(''),
      //      lastname: new FormControl(''),
      //      dateofbirth: new FormControl(''),
      //      street: new FormControl(''),
      //      street2: new FormControl(''),
      //      zip: new FormControl(''),
      //      country: new FormControl(''),
      //      phone: new FormControl(''),
      //  }),
      userDetails: new FormGroup({
        firstname: new FormControl(''),
        lastname: new FormControl(''),
        dateofbirth: new FormControl(''),
        street: new FormControl(''),
        street2: new FormControl(''),
        zip: new FormControl(''),
        country: new FormControl(''),
        phone: new FormControl(''),
    }),
     
  })
  
  
  constructor() { }

  ngOnInit(): void {
  }
//   get userDetails() {
//     return (this.multistep.controls['userDetails'] as FormGroup).controls;
//   }

// get contactDetails() {
// return this.multistep.controls['contactDetails']   &&  this.multistep.controls['controls'];
// }

submit() {  
  this.submitted = true;
  // if(this.multistep.controls['userDetails'].invalid && this.step == 1) {
  //   return;
  // }
  // if(this.multistep.controls.contactDetails.invalid && this.step == 2) {
  //   return;
  // }
  this.step = this.step + 1;
  
}

previous() {
this.step = this.step - 1;
}





}


