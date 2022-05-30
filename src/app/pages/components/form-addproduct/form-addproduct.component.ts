import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule, Validators,FormBuilder,AbstractControl } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

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
  control:any=1;
  step: any = 3;
  userId :any;

  submitted: any = false;
  
  multistep = new FormGroup({
      itemDetails:new FormGroup({
        brand: new FormControl(''),
        price: new FormControl(''),
        date: new FormControl(''),
        year: new FormControl(''),
        strap: new FormControl(''),
        glass: new FormControl(''),
        strap_color: new FormControl(''),
        water_resistence: new FormControl(''),
        carcase: new FormControl(''),
        carcase_form: new FormControl(''),
        carcase_color: new FormControl(''),
        carcase_thickness: new FormControl(''),
        alarm: new FormControl(''),
        timer: new FormControl(''),
        mechanism: new FormControl(''),
        rating: new FormControl(''),
        gender: new FormControl(''),
        promoted: new FormControl(''),
        category: new FormControl(''),
        model: new FormControl(''),
        conditions: new FormControl('')
      }),

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
  validation=new FormGroup({
    brand: new FormControl(''),
    price: new FormControl(''),
    year: new FormControl(''),
    strap: new FormControl(''),
    strap_color: new FormControl(''),
    mechanism: new FormControl(''),
    gender: new FormControl(''),
    model: new FormControl(''),
    conditions: new FormControl('')
  })

  
  constructor(public auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
   
  }
  
  phonenumber = new FormGroup({
  phone_number: new FormControl(''),
  })

  postData(): void{

    console.log(this.multistep.value.itemDetails);
    this.auth.user$.subscribe(
      (profile) => {
        if(profile?.sub !== undefined)
          this.userId = profile.sub.split("|")[1];
          // this.phonenumber.value.user_id=this.userId;
          this.callJsonPostRestApi( "https://watchappa3-be.herokuapp.com/product/" + this.userId).subscribe(data=>{
                
          });
      }
    );
  }

  callJsonPostRestApi(url: string):Observable<any> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers':  'Content-Type, X-Auth-Token, Authorization, Origin', 'Access-Control-Allow-Methods':  'POST', 'Access-Control-Allow-Credentials': 'true'});
    return this.http.post(url,this.multistep.value.itemDetails,{headers:headers})
      .pipe(map((data: any) => {
      //handle api 200 response code here or you wanted to manipulate to response
        return data;

      }),
        catchError((error) => {    // handle error
         
          if (error.status == 404) {
            //Handle Response code here
          }
          return throwError(error);
        })
      );

  }
  get f(){
    return this.multistep.value.itemDetails.controls;
  }
  

  public findInvalidControls() {
    var OK=1;
    const controls = this.validation.value;
    for (const name in controls) {
        if (controls[name].length==0) {
            OK=0; 
        }
    }
    return OK;
}

  
next() {
  // if(this.multistep.controls['itemDetails'].invalid)
  // return ;
  // if(this.check()==1)
  // if(this.multistep.status=="VALID")
  // this.step = this.step + 1;
  // else alert("CUCU") ;
  this.validation.value.brand= this.multistep.value.itemDetails.brand;
  this.validation.value.price= this.multistep.value.itemDetails.price;
  this.validation.value.year= this.multistep.value.itemDetails.year;
  this.validation.value.strap= this.multistep.value.itemDetails.strap;
  this.validation.value.strap_color= this.multistep.value.itemDetails.strap_color;
  this.validation.value.mechanism= this.multistep.value.itemDetails.mechanism;
  this.validation.value.gender= this.multistep.value.itemDetails.gender;
  this.validation.value.model= this.multistep.value.itemDetails.model;
  this.validation.value.conditions= this.multistep.value.itemDetails.conditions;
  console.log(this.validation.controls);
  console.log(this.validation.value);
  if(this.findInvalidControls()==0) {alert("Va rugam sa completati campurile obligatorii!"); 
  this.control=0;  
}
else {
  this.step = this.step + 1;
  this.control=1;
  }
  console.log(this.findInvalidControls());
}

previous() {
this.step = this.step - 1;
}

}


