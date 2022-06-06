import { Component, Input, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-buy-a-watch',
  templateUrl: './buy-a-watch.component.html',
  styleUrls: ['./buy-a-watch.component.css']
})
export class BuyAWatchComponent implements OnInit {

  constructor(public auth: AuthService, private http: HttpClient) { }
  public userId!: string;
  public productsJson!: any[];
  public filtersJson!: any;
  public userJson!: any;

  ngOnInit(): void {
    this.getData();

  }
  getData(): void {
    var brand = this.itemDetails.value.brand;
    var mechanism = this.itemDetails.value.mechanism;
    var condition = this.itemDetails.value.conditions;
    var year = this.itemDetails.value.year;
    var strap = this.itemDetails.value.strap;
    var strap_color= this.itemDetails.value.strap_color;
    var carcase = this.itemDetails.value.carcase;
    var carcase_form = this.itemDetails.value.carcase_form;
    var carcase_thickness = this.itemDetails.value.carcase_thickness;
    var water_resistence = this.itemDetails.value.water_resistence;
    var carcase_color = this.itemDetails.value.carcase_color;
    var alarm = this.itemDetails.value.alarm;
    var timer = this.itemDetails.value.timer;
    var gender = this.itemDetails.value.gender;

    var url = `https://watchappa3-be.herokuapp.com/product/filter?`;
    if(brand != ""){
      url = url.concat(`brand=${brand}&`);
    }
    if(mechanism != ""){
      url = url.concat(`mechanism=${mechanism}&`);
    }
    if(condition != ""){
      url = url.concat(`condition=${condition}&`);
    }
    if(year != ""){
      url = url.concat(`year=${year}&`);
    }
    if(strap != ""){
      url = url.concat(`strap=${strap}&`);
    }
    if(strap_color != ""){
      url = url.concat(`color=${strap_color}&`);
    }
    if(carcase != ""){
      url = url.concat(`carcase=${carcase}&`);
    }
    if(carcase_form != ""){
      url = url.concat(`form=${carcase_form}&`);
    }
    if(carcase_thickness != ""){
      url = url.concat(`thickness=${carcase_thickness}&`);
    }
    if(water_resistence != ""){
      url = url.concat(`waterResistance=${water_resistence}&`);
    }
    if(carcase_color != ""){
      url = url.concat(`carcaseColor=${carcase_color}&`);
    }
    if(alarm != ""){
      url = url.concat(`alarm=${alarm}&`);
    }
    if(timer != ""){
      url = url.concat(`timer=${timer}&`);
    }
    if(gender != ""){
      url = url.concat(`gender=${gender}&`);
    }
    url.replaceAll(" ","%20");
    // alert(url);
    this.auth.user$.subscribe(
      (profile) => {
        if (profile?.sub !== undefined)
          this.userId = profile.sub.split("|")[1];

        this.callJsonGetRestApi(url).subscribe(data => { //de schimbat link-ul     
          this.productsJson = data;
          if(this.itemDetails.value.price_min != "" &&  this.itemDetails.value.price_max != ""){ //
            this.productsJson = this.productsJson.filter((product) => { return (product.price <= parseInt(this.itemDetails.value.price_max)) && (product.price >= parseInt(this.itemDetails.value.price_min))})
          }
        });

        this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/product/filters").subscribe(data => { //de schimbat link-ul     
          this.filtersJson = data;
      });
      }
    );

  }

  resetData():void {
    // this.itemDetails.reset({value: ''});
    // this.getData();
  }

  callJsonGetRestApi(url: string): Observable<any> {
    console.log(url);
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
  searchDetails = new FormGroup({
    content: new FormControl('')
  })
  itemDetails = new FormGroup({
    price_min: new FormControl(''),
    price_max: new FormControl(''),
    brand: new FormControl(''),
    year: new FormControl(''),
    strap: new FormControl(''),
    strap_color: new FormControl(''),
    water_resistence: new FormControl(''),
    carcase: new FormControl(''),
    carcase_form: new FormControl(''),
    carcase_color: new FormControl(''),
    carcase_thickness: new FormControl(''),
    alarm: new FormControl(''),
    timer: new FormControl(''),
    mechanism: new FormControl(''),
    gender: new FormControl(''),
    conditions: new FormControl(''),
  })
}

