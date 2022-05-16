import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-seller-profile-buyer-perspective',
  templateUrl: './seller-profile-buyer-perspective.component.html',
  styleUrls: ['./seller-profile-buyer-perspective.component.css']
})
export class SellerProfileBuyerPerspectiveComponent implements OnInit {

  public status1: 'none' | 'first' = 'none';
  public status2: 'none' | 'secound' = 'none';
  public status3: 'none' | 'third' = 'none';
  public status4: 'none' | 'forth' = 'none';
  /////API
  public userId!: string;
  public productsJson!: any[];
  public totalPrice: number = 0;
  public userJson!: any;
  public sellerId: any;

  constructor(public auth: AuthService, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sellerId = this.route.snapshot.paramMap.get('id')
    this.getData();
  }

  getData(): void {
    this.auth.user$.subscribe(
      (profile) => {
        if (profile?.sub !== undefined)
          this.userId = profile.sub.split("|")[1];

        this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/product/" + this.sellerId + "/products/").subscribe(data => { //de schimbat link-ul     
          this.productsJson = data.products;
          this.productsLength = data.products.length;
        });
        this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/user/" + this.sellerId).subscribe(data => { //de schimbat link-ul     
          this.userJson = data.user;
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


  /////// pagination
  productsLength: number = 0;
  pageIndex: number = 0;
  pageSize: number = 4;
  lowValue: number = 0;
  highValue: number = 4;

  getPaginatorData(event: { pageIndex: number; }) {
    console.log(event);
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    }
    else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }

  /////////////////////

  toggle1() {
    if (this.status1 == 'first')
      this.status1 = 'none';
    else
      this.status1 = 'first';
  }
  toggle2() {
    if (this.status2 == 'secound')
      this.status2 = 'none';
    else
      this.status2 = 'secound';
  }
  toggle3() {
    if (this.status3 == 'third')
      this.status3 = 'none';
    else
      this.status3 = 'third';
  }
  toggle4() {
    if (this.status4 == 'forth')
      this.status4 = 'none';
    else
      this.status4 = 'forth';
  }


}
