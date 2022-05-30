import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-buy-a-watch',
  templateUrl: './buy-a-watch.component.html',
  styleUrls: ['./buy-a-watch.component.css']
})
export class BuyAWatchComponent implements OnInit {
  brand_values:any = ["Timex","Fossil","Daniel Klein","Certina","COROS","Duxot","Tissot","Armani","Claude Bernard","Haemmer","Rolex","Daniel Wellington","Edox","Gant","Junkers","Roamer","Regent","Rotary","Saint Honore","Versace","Wenger","AMS","KHS","BV","BOSS","Braun","BERTHA","Casio","Constantin Dardi","Citizen"];
  mechanism_values:any=["Manual Movement","Automatic Movement","Quartz Movement"];
  strap_color:any = ["Brown Watch Strap","Black Watch Strap","Red & Orange Watch Strap","Blue Watch Strap","Green Watch Strap"];
  strap_values:any = ["Classic","Rally","Double Ridge","Stainless Steel","Titanium","Ceramic","Canvas","Nylon","Rubber","Wood","Leather","Faux-Leather"];
 
  condition_values:any=["Unworn","Mint","Excellent","Very Good","Good","Fair","Poor"];
  carcase_values:any=["Silver","Gold","Steel","White Gold","Ceramics"]
  carcase_color:any=["Silver","Gold","Rose Gold","Neon"];
  

  constructor(public auth: AuthService, private http: HttpClient) { }
  public userId!: string;
  public productsJson!: any[];
  public userJson!: any;

  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.auth.user$.subscribe(
      (profile) => {
        if (profile?.sub !== undefined)
          this.userId = profile.sub.split("|")[1];

        this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/product/").subscribe(data => { //de schimbat link-ul     
          this.productsJson = data.products;
        });

      }
    );
  }


  callJsonGetRestApi(url: string): Observable<any> {

    return this.http.get(url)
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

  itemDetails = new FormGroup({
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
  })
}

