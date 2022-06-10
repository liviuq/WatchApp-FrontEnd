import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { MatDialog } from '@angular/material/dialog';
import { LoginConditionComponent } from '../../../login-condition/login-condition.component';

@Component({
  selector: 'app-seller-profile-product-card',
  templateUrl: './seller-profile-product-card.component.html',
  styleUrls: ['./seller-profile-product-card.component.css']
})
export class SellerProfileProductCardComponent implements OnInit {

  @Input()
  productName!: string;
  @Input()
  sellerId!: string;
  @Input()
  locationName!: string;
  @Input()
  date!: string;
  @Input()
  watchPrice!: string;
  @Input()
  watchYear!:string;
  @Input()
  productId!:string;
  constructor(public auth: AuthService, private http: HttpClient, private router: Router,private dialogRef : MatDialog) { }
  public userId!: string;
  public sellerName!: string;

  ngOnInit(): void {

    this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/user/" + this.sellerId).subscribe(data => { //de schimbat link-ul     
          this.sellerName = data.user.user_name;
        });
  }

  addToFavorite(): void{
    this.auth.user$.subscribe(
      (profile) => {
        if (profile?.sub !== undefined){
          this.userId = profile.sub.split("|")[1];
          this.callJsonPostRestApi( "https://watchappa3-be.herokuapp.com/favorites/"+this.userId+"/insert/"+this.productId).subscribe(data=>{
            console.log(data);
          }); 
        }
        else this.openLoginConditionDialog();
      }
    );

    
  }

  callJsonPostRestApi(url: string):Observable<any> {
   
    return this.http.post(url, null)
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

  openLoginConditionDialog():void{
    this.dialogRef.open(LoginConditionComponent);
  }

}
