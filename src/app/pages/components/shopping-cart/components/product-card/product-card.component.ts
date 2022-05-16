import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input()
  buyerId!: string;
  @Input()
  productCartId!: string;
  @Input()
  productId!: string;
  @Input()
  productName!: string;
  @Input()
  productPrice!: string;
  @Input()
  productDelivery!: string;
  @Input()
  productTotal!: string;
  @Input()
  vendor!: string;

 
  

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  addToFavorite(): void{
    this.callJsonPostRestApi( "https://watchappa3-be.herokuapp.com/favorites/"+this.buyerId+"/insert/"+this.productId).subscribe(data=>{
      console.log(data);
    }); 
  }

  deleteProduct(): void{
    this.callJsonDeleteRestApi( "https://watchappa3-be.herokuapp.com/cart/"+this.buyerId+"/delete/"+this.productCartId).subscribe(data=>{
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
