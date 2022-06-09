import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(public auth: AuthService, private http: HttpClient,private router: Router) { }
  public userId!: string;
  public productsJson!: any[];

  ngOnInit(): void {
    this.getData();
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

}
