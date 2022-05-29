import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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

  step: any = 1;
  userId :any;

  submitted: any = false;
  multistep = new FormGroup({
      itemDetails:new FormGroup({
        brand: new FormControl('',Validators.required),
        price: new FormControl('',Validators.required),
        date: new FormControl(''),
        year: new FormControl('',Validators.required),
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
        mechanism: new FormControl('',Validators.required),
        rating: new FormControl(''),
        gender: new FormControl('',Validators.required),
        promoted: new FormControl(''),
        category: new FormControl(''),
        model: new FormControl('',Validators.required),
        conditions: new FormControl('',Validators.required)
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
  

  
  constructor(public auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
   
  }
  
  phonenumber = new FormGroup({
  phone_number: new FormControl(''),
  })

  postData(): void{
    console.log('dsadasd');
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

  
next() {
  // if(this.multistep.controls['itemDetails'].invalid)
  // return ;
  this.step = this.step + 1;
}

previous() {
this.step = this.step - 1;
}





}


