import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  /////API
  public userId!: string;
  public productsJson!: any;
  public totalPrice: number = 0;


  constructor(public auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.auth.user$.subscribe(
      (profile) => {
        if (profile?.sub !== undefined)
          this.userId = profile.sub.split("|")[1];

        this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/cart/" + this.userId).subscribe(data => {
          this.productsJson = data.cartExtracted.cartUtils;
          this.totalPrice = data.totalPrice;
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
