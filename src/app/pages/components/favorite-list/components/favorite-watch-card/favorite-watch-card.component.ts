import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-watch-card',
  templateUrl: './favorite-watch-card.component.html',
  styleUrls: ['./favorite-watch-card.component.css']
})
export class FavoriteWatchCardComponent implements OnInit {

  @Input() name!: string;
  @Input() price!: string;
  @Input() seller!: string;
  @Input() noStars!: string;
  @Input() buyerId!: string;
  @Input() productId!: string;
  @Input() productFavoritetId!: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    console.log(this.seller);
  }

  addToCart(): void{
    this.callJsonPostRestApi( "https://watchappa3-be.herokuapp.com/cart/"+this.buyerId+"/insert/"+this.productId).subscribe(data=>{
    }); 
  }

  deleteProduct(): void{
    this.callJsonDeleteRestApi( "https://watchappa3-be.herokuapp.com/favorites/"+this.buyerId+"/delete/"+this.productFavoritetId).subscribe(data=>{
      this.reloadCurrentRoute();
    });  
  }

  reloadCurrentRoute(): void{
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

callJsonDeleteRestApi(url: string):Observable<any> {
   
  return this.http.delete(url)
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

}
