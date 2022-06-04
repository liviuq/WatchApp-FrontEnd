import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginConditionComponent } from '../../../login-condition/login-condition.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-buy-a-watch-card',
  templateUrl: './buy-a-watch-card.component.html',
  styleUrls: ['./buy-a-watch-card.component.css']
})
export class BuyAWatchCardComponent implements OnInit {


  @Input() name!: string;
  @Input() price!: string;
  @Input() sellerId!: string;
  public seller!: string;
  @Input() isPromoted!: string;
  @Input() buyerId!: string;
  @Input() productId!: string;

  constructor(public auth: AuthService,private http: HttpClient, private router: Router, private dialogRef : MatDialog) { }

  ngOnInit(): void {

    this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/user/" + this.sellerId).subscribe(data => { //de schimbat link-ul     
          this.seller = data.user.user_name;
        });

  }
  

  addToFavorite(): void{
    
    this.auth.user$.subscribe(
      (profile) => {
        if (profile?.sub == undefined)
        this.openLoginConditionDialog();
        else{
          this.callJsonPostRestApi( "https://watchappa3-be.herokuapp.com/favorites/"+this.buyerId+"/insert/"+this.productId).subscribe(data=>{
          console.log(data);
          }); 
        }
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
