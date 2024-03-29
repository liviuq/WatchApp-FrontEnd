import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  constructor(public auth: AuthService, private http: HttpClient) { }
  public userId!: string;
  public productsJson!: any[];
  public productsLength!: string;
  public userJson!: any;
  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.auth.user$.subscribe(
      (profile) => {
        if (profile?.sub !== undefined)
          this.userId = profile.sub.split("|")[1];
        this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/favorites/extract/" + this.userId).subscribe(data => { //de schimbat link-ul     
          this.productsJson = data.favoriteUtilsList;
          this.productsLength = data.favoriteUtilsList.length;
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
}
