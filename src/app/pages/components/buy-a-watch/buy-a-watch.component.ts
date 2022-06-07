import { Component,  OnInit } from '@angular/core';
import {HttpParams, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-buy-a-watch',
  templateUrl: './buy-a-watch.component.html',
  styleUrls: ['./buy-a-watch.component.css']
})
export class BuyAWatchComponent implements OnInit {
  constructor(public auth: AuthService, private http: HttpClient,private route: ActivatedRoute, private router: Router) { 
    
  }

  public p:number=1;
  public params!:any;
  public userId!: string;
  public productsJson!: any[];
  public filtersJson!: any;
  public userJson!: any;
  public paramsObject!:any;
  public brand!:string;
  public mechanism !:string;
  public condition !:string;
  public year !:string;
  public strap !:string;
  public strap_color!:string;
  public carcase !:string;
  public carcase_form !:string;
  public carcase_thickness !:string;
  public water_resistence!:string;
  public carcase_color!:string;
  public alarm !:string;
  public timer !:string;
  public gender !:string;
  public price_min !:string;
  public price_max !:string;
  ngOnInit(): void { 
    this.route.queryParamMap
      .subscribe((params) => {
        this.params = params;
  }
);
    this.getData();
  }
  updateData():void{
    console.log("UPDATE DATA");
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/buy-a-watch'], { queryParams: { 
        brand : this.itemDetails.value.brand ,
         mechanism : this.itemDetails.value.mechanism,
         condition : this.itemDetails.value.conditions,
         year : this.itemDetails.value.year,
         strap : this.itemDetails.value.strap,
         strap_color: this.itemDetails.value.strap_color,
         carcase : this.itemDetails.value.carcase,
         carcase_form : this.itemDetails.value.carcase_form,
         carcase_thickness : this.itemDetails.value.carcase_thickness,
         water_resistence : this.itemDetails.value.water_resistence,
         carcase_color : this.itemDetails.value.carcase_color,
         alarm : this.itemDetails.value.alarm,
         timer : this.itemDetails.value.timer,
         gender : this.itemDetails.value.gender,
         price_min : this.itemDetails.value.price_min,
         price_max : this.itemDetails.value.price_max,
      },queryParamsHandling: 'merge'});
  });
    
  }

  getData(): void {
    
    var url = `https://watchappa3-be.herokuapp.com/product/filter?`;
    if(this.params.get('brand') != ""){
      url = url.concat(`brand=${this.params.get('brand')}&`);
    }
    if(this.params.get('mechanism') != ""){
      url = url.concat(`mechanism=${this.params.get('mechanism')}&`);
    }
    if(this.params.get('condition') != ""){
      url = url.concat(`condition=${this.params.get('condition')}&`);
    }
    if(this.params.get('year') != ""){
      url = url.concat(`year=${this.params.get('year')}&`);
    }
    if(this.params.get('strap') != ""){
      url = url.concat(`strap=${this.params.get('strap')}&`);
    }
    if(this.params.get('strap_color') != ""){
      url = url.concat(`color=${this.params.get('strap_color')}&`);
    }
    if(this.params.get('carcase') != ""){
      url = url.concat(`carcase=${this.params.get('carcase')}&`);
    }
    if(this.params.get('carcase_form') != ""){
      url = url.concat(`form=${this.params.get('carcase_form')}&`);
    }
    if(this.params.get('carcase_thickness') != ""){
      url = url.concat(`thickness=${this.params.get('carcase_thickness')}&`);
    }
    if(this.params.get('water_resistence') != ""){
      url = url.concat(`waterResistance=${this.params.get('water_resistence')}&`);
    }
    if(this.params.get('carcase_color') != ""){
      url = url.concat(`carcaseColor=${this.params.get('carcase_color')}&`);
    }
    if(this.params.get('alarm') != ""){
      url = url.concat(`alarm=${this.params.get('alarm')}&`);
    }
    if(this.params.get('timer') != ""){
      url = url.concat(`timer=${this.params.get('timer')}&`);
    }
    if(this.params.get('gender') != ""){
      url = url.concat(`gender=${this.params.get('gender')}&`);
    }
    url.replaceAll(" ","%20");
    // alert(url);
    this.auth.user$.subscribe(
      (profile) => {
        if (profile?.sub !== undefined)
          this.userId = profile.sub.split("|")[1];

        this.callJsonGetRestApi(url).subscribe(data => { //de schimbat link-ul     
          this.productsJson = data;
          console.log(this.params.get('price_min') + " --- "+ this.params.get('price_max'));
          if(this.params.get('price_min') != "" &&  this.params.get('price_max') != ""){ //
            this.productsJson = this.productsJson.filter((product) => { return (product.price <= parseInt(this.params.get('price_max'))) && (product.price >= parseInt(this.params.get('price_min')))})
          }   
        });

        this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/product/filters").subscribe(data => { //de schimbat link-ul     
          this.filtersJson = data;
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

