import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { MatDialog } from '@angular/material/dialog';
import { LoginConditionComponent } from '../login-condition/login-condition.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public userId!: string;
  public productJson: any;
  public productId: any;
  public seller!: string;

  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];

  constructor(public auth: AuthService, private http: HttpClient, private route: ActivatedRoute,private dialogRef : MatDialog) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getData();

    /// images

    this.galleryOptions = [
      {
        width: '800px',
        height: '690px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        imagePercent: 87,
        thumbnailsPercent: 13,
        thumbnailsMargin: 5,
        thumbnailMargin: 5
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '../../../../assets/product/1.jpg',
        medium: '../../../../assets/product/1.jpg',
        big: '../../../../assets/product/1.jpg'
      },
      {
        small: '../../../../assets/product/2.jpg',
        medium: '../../../../assets/product/2.jpg',
        big: '../../../../assets/product/2.jpg'
      },
      {
        small: '../../../../assets/product/3.jpg',
        medium: '../../../../assets/product/3.jpg',
        big: '../../../../assets/product/3.jpg'
      },{
        small: '../../../../assets/product/4.jpg',
        medium: '../../../../assets/product/4.jpg',
        big: '../../../../assets/product/4.jpg'
      },
    ];

  }

  getData(): void {
    this.auth.user$.subscribe(
      (profile) => {
        if (profile?.sub !== undefined)
          this.userId = profile.sub.split("|")[1];

        this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/product/" + this.productId ).subscribe(data => { //de schimbat link-ul     
          this.productJson = data.product;
          this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/user/" + this.productJson.user_id ).subscribe(data => { //de schimbat link-ul     
          this.seller = data.user.user_name;
        });
        });
      }
    );
  }

  addToFavorite(): void{
    
    if(this.userId!==undefined)
    this.callJsonPostRestApi( "https://watchappa3-be.herokuapp.com/favorites/"+this.userId+"/insert/"+this.productId).subscribe(data=>{
      console.log(data);
    }); 
    else 
    this.openLoginConditionDialog();
    
  }

  addToCart(): void{

    if(this.userId!==undefined){
      this.callJsonPostRestApi( "https://watchappa3-be.herokuapp.com/cart/"+this.userId+"/insert/"+this.productId).subscribe(data=>{
      }); 
    }
    else {
      this.openLoginConditionDialog();
    }
    
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
