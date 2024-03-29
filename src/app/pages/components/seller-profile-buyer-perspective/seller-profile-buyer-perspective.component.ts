import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-seller-profile-buyer-perspective',
  templateUrl: './seller-profile-buyer-perspective.component.html',
  styleUrls: ['./seller-profile-buyer-perspective.component.css']
})
export class SellerProfileBuyerPerspectiveComponent implements OnInit {

  public status1: 'none' | 'first' = 'none';
  public status2: 'none' | 'secound' = 'none';
  public status3: 'none' | 'third' = 'none';
  public status4: 'none' | 'forth' = 'none';
  /////API
  public userId!: string;
  public productsJson!: any[];
  public totalPrice: number = 0;
  public userJson!: any;
  public sellerId: any;


  public brandFilter:any[]=[];
  public brandFilterFINAL!:any[];

  public sexFilter:any[]=[];
  public sexFilterFINAL!:any[];

  public conditionFilter:any[]=[];
  public conditionFilterFINAL!:any[];

  public yearFilter:any[]=[];
  public yearFilterFINAL!:any[];

  public curentFilter:any[]=[];
  public curentValueFilter:any[]=[];

  constructor(public auth: AuthService, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sellerId = this.route.snapshot.paramMap.get('id')
    this.getData();
  }

  getData(): void {
    this.auth.user$.subscribe(
      (profile) => {
        if (profile?.sub !== undefined)
          this.userId = profile.sub.split("|")[1];

        this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/product/" + this.sellerId + "/products/").subscribe(data => { //de schimbat link-ul     
          this.productsJson = data.products;
          this.productsLength = data.products.length;

              /* ------ data for dinamic filter -------- backend does not do his job smh*/
              for(let i=0;i<this.productsLength;i++){
                this.brandFilter.push(this.productsJson[i].brand);
               //  if(this.productsJson[i].gender===0)
               //  this.sexFilter.push("Barbat");
               //  else this.sexFilter.push("Femeie");
               this.sexFilter.push(this.productsJson[i].gender);
                 /* ------ condition does not exist yet -------- backend does not do his job smh  ///////////////////////////////////////////////////////////////DONT FORGET TO ADD*/ 
                this.yearFilter.push(this.productsJson[i].year);
                this.conditionFilter.push(this.productsJson[i].conditions);
             }
             this.conditionFilterFINAL= this.conditionFilter.filter((v,i,a)=>a.indexOf(v)===i);
             this.brandFilterFINAL=this.brandFilter.filter((v,i,a)=>a.indexOf(v)===i);
             this.sexFilterFINAL=this.sexFilter.filter((v,i,a)=>a.indexOf(v)===i);
             this.yearFilterFINAL=this.yearFilter.filter((v,i,a)=>a.indexOf(v)===i);
             
             /* ------ works -------- */
             //console.log(this.brandFilterFINAL);
             //console.log(this.sexFilterFINAL);
             //console.log(this.yearFilterFINAL);
             this.curentFilter.push('none');
             this.curentValueFilter.push('none');

        });
        this.callJsonGetRestApi("https://watchappa3-be.herokuapp.com/user/" + this.sellerId).subscribe(data => { //de schimbat link-ul     
          this.userJson = data.user;
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


  /////// pagination
  productsLength: number = 0;
  pageIndex: number = 0;
  pageSize: number = 4;
  lowValue: number = 0;
  highValue: number = 4;

  getPaginatorData(event: { pageIndex: number; }) {
    console.log(event);
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    }
    else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }

  /////////////////////

  toggle1() {
    if (this.status1 == 'first')
      this.status1 = 'none';
    else
      this.status1 = 'first';
  }
  toggle2() {
    if (this.status2 == 'secound')
      this.status2 = 'none';
    else
      this.status2 = 'secound';
  }
  toggle3() {
    if (this.status3 == 'third')
      this.status3 = 'none';
    else
      this.status3 = 'third';
  }
  toggle4() {
    if (this.status4 == 'forth')
      this.status4 = 'none';
    else
      this.status4 = 'forth';
  }

  filterFunction1(actualValue:string,typeFilter:string){
    
    if(this.curentFilter.length!=0 &&this.curentValueFilter.length!=0)   //aplicam filtrele date si scoatem 'none'
    {

      this.curentFilter=this.curentFilter.filter(item=> item!== 'none');
      this.curentValueFilter=this.curentValueFilter.filter(item=> item!== 'none');
      
      var a = this.curentFilter.lastIndexOf(typeFilter);
      var b = this.curentValueFilter.lastIndexOf(actualValue);
     
      if( a!=-1&&b!=-1 ){                                                 //verificam daca filtrele exista deja, daca exista le scoatem (*)
                                             
          this.curentFilter.splice(a,1);
          this.curentValueFilter.splice(b,1);
          
          console.log(this.curentFilter);
          console.log(this.curentValueFilter);

          if(this.curentFilter.length===0&&this.curentValueFilter.length===0)  // daca nu avem nimic in filtru punem none
          {
                    this.curentFilter.push('none');
                    this.curentValueFilter.push('none');
                    console.log(this.curentFilter);
                    console.log(this.curentValueFilter);
          }

      }
      else{                                                                  //altfel le punem                                          (*)
                    this.curentFilter.push(typeFilter);
                    this.curentValueFilter.push(actualValue);
                    
                    console.log(this.curentFilter);
                    console.log(this.curentValueFilter);
      }
    }

  }
  checkFilter(yearValue:string,brandValue:string,sexValue:string,conditionValue:string){
      if(this.curentFilter.includes('year'))
          {
            if(!this.curentValueFilter.includes(yearValue))
            return -1;
          }

      if(this.curentFilter.includes('brand'))
      {
        if(!this.curentValueFilter.includes(brandValue))
        return -1;
      }
      
      if(this.curentFilter.includes('sex'))
          {
            if(!this.curentValueFilter.includes(sexValue))
            return -1;
          }
      if(this.curentFilter.includes('condition'))
      {
        if(!this.curentValueFilter.includes(conditionValue))
        return -1;
      }
      return 1;
  }
}
