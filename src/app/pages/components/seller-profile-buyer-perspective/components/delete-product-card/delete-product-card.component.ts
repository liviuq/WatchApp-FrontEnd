import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-delete-product-card',
  templateUrl: './delete-product-card.component.html',
  styleUrls: ['./delete-product-card.component.css']
})
export class DeleteProductCardComponent implements OnInit {

  @Input()
  productName!: string;
  @Input()
  sellerName!: string;
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
  public userId!: string;
  public profileJson!: any;
  public productsLength:any;
  public productsJson!: any[];
  public totalPrice: number = 0;
  public userJson!:any;
  constructor(public auth: AuthService, private http: HttpClient) { }
 

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        if(profile?.sub !== undefined)
          this.userId = profile.sub.split("|")[1];

          this.callJsonGetRestApi( "https://watchappa3-be.herokuapp.com/user/" + this.userId).subscribe(data=>{
                this.profileJson=data.user;
                console.log(this.profileJson);
      });
          this.callJsonGetRestApi( "https://watchappa3-be.herokuapp.com/product/"+this.userId+"/products/").subscribe(data=>{     
                this.productsLength = data.products.length;
                this.productsJson=data.products;        
});
      }
    );
  }
  callJsonGetRestApi(url: string):Observable<any> {
   
    
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
  deleteProductCard(){
    console.log(this.productId);
     this.dpcapi('https://watchappa3-be.herokuapp.com/product/'+this.userId+'/delete/'+this.productId).subscribe(data=>{
      console.log("success");
      window.location.reload();
     });
     
     /*
     this.callJsonGetRestApi( "https://watchappa3-be.herokuapp.com/product/"+this.userId+"/products/").subscribe(data=>{     
                this.productsLength = data.products.length;
                this.productsJson=data.products;  
                window.location.reload();               
});*/

  }

  dpcapi(url:string):Observable<any>{
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers':  'Content-Type, X-Auth-Token, Authorization, Origin', 'Access-Control-Allow-Methods':  'PUT', 'Access-Control-Allow-Credentials': 'true'});
    return this.http.delete(url,{headers:headers})
    .pipe(map((data: any) => {
    //handle api 200 response code here or you wanted to manipulate to response  
    return data;

    }),
      catchError((error) => {    // handle error
        console.log("2");
        if (error.status == 404) {
          //Handle Response code here
        }
        return throwError(error);
      })
    );
  }
  ///product 
  //@DeleteMapping("{user_id}/delete/{id}")
 

 
}
