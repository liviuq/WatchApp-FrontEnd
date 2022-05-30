import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/user/" + this.sellerId).subscribe(data => { //de schimbat link-ul     
          this.seller = data.user.user_name;
        });

  }
  

  addToFavorite(): void{
    this.callJsonPostRestApi( "https://watchappa3-be.herokuapp.com/favorites/"+this.buyerId+"/insert/"+this.productId).subscribe(data=>{
      console.log(data);
    }); 
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

}
