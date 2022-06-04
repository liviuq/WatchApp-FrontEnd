import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { MatDialog } from '@angular/material/dialog';
import { LoginConditionComponent } from '../../../login-condition/login-condition.component';

@Component({
  selector: 'app-watch-card',
  templateUrl: './watch-card.component.html',
  styleUrls: ['./watch-card.component.css']
})
export class WatchCardComponent implements OnInit {

  @Input() name!: string;
  @Input() price!: string;
  @Input() productId!: string;
  constructor(public auth: AuthService, private http: HttpClient,private dialogRef : MatDialog) { }
  public userId!: string;
  public productsJson!: any[];
  public productsLength!: string;
  public userJson!: any;
  public isFavorite: boolean = false;
  ngOnInit(): void {
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

  openLoginConditionDialog():void{
    this.dialogRef.open(LoginConditionComponent);
  }

}
