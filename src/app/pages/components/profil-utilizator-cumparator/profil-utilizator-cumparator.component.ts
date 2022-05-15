import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-profil-utilizator-cumparator',
  templateUrl: './profil-utilizator-cumparator.component.html',
  styleUrls: ['./profil-utilizator-cumparator.component.css']
})
export class ProfilUtilizatorCumparatorComponent implements OnInit {

  public show:boolean = false;
  public numberTel:any='+4078*******';
  public numberTelColor:any='#FFFFFF';
  constructor(public auth: AuthService, private http: HttpClient) { }
  public userId!: string;
  public profileJson!: any;
  public productsLength:any;
  
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
});
      }
    );

    
  }
  toggle(){
    this.show=!this.show;
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

}
