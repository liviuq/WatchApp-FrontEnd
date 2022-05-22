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


  public status1: 'none' | 'first'  = 'none';
  public status2: 'none' | 'secound'  = 'none';
  public status3: 'none' | 'third'  = 'none';
  public status4: 'none' | 'forth'  = 'none';


  public show:boolean = false;
  public numberTel:any='+4078*******';
  public numberTelColor:any='#FFFFFF';
  constructor(public auth: AuthService, private http: HttpClient) { }
  public userId!: string;
  public profileJson!: any;
  public productsLength:any;
  public productsJson!: any[];
  public totalPrice: number = 0;
  public userJson!:any;


  public brandFilter:any[]=[];
  public brandFilterFINAL!:any[];

  public sexFilter:any[]=[];
  public sexFilterFINAL!:any[];

  public conditionFilter:any[]=[];
  public conditionFilterFINAL!:any[];

  public yearFilter:any[]=[];
  public yearFilterFINAL!:any[];

  public curentFilter:any='none';
  public curentValueFilter:any='none';

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


                 /* ------ data for dinamic filter -------- backend does not do his job smh*/
                for(let i=0;i<this.productsLength;i++){
                   this.brandFilter.push(this.productsJson[i].brand);
                   if(this.productsJson[i].gender===0)
                   this.sexFilter.push("Barbat");
                   else this.sexFilter.push("Femeie");
                    /* ------ condition does not exist yet -------- backend does not do his job smh  ///////////////////////////////////////////////////////////////DONT FORGET TO ADD*/ 
                   this.yearFilter.push(this.productsJson[i].year);
                }
                this.brandFilterFINAL=this.brandFilter.filter((v,i,a)=>a.indexOf(v)===i);
                this.sexFilterFINAL=this.sexFilter.filter((v,i,a)=>a.indexOf(v)===i);
                this.yearFilterFINAL=this.yearFilter.filter((v,i,a)=>a.indexOf(v)===i);
                 
                /* ------ works -------- */
                //console.log(this.brandFilterFINAL);
                //console.log(this.sexFilterFINAL);
                //console.log(this.yearFilterFINAL);
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
  /* ------ paginator -------- */
  pageIndex: number = 0;
  pageSize: number = 4;
  lowValue: number = 0;
  highValue: number = 4;       

  getPaginatorData(event: { pageIndex: number; }){
     console.log(event);
     if(event.pageIndex === this.pageIndex + 1){
        this.lowValue = this.lowValue + this.pageSize;
        this.highValue =  this.highValue + this.pageSize;
       }
    else if(event.pageIndex === this.pageIndex - 1){
       this.lowValue = this.lowValue - this.pageSize;
       this.highValue =  this.highValue - this.pageSize;
      }   
       this.pageIndex = event.pageIndex;
 }
/* ------ filter -------- */
  toggle1(){
    if(this.status1=='first')
    this.status1='none';
    else
      this.status1='first';
  }
  toggle2(){
    if(this.status2=='secound')
    this.status2='none';
    else
      this.status2='secound';
  }
  toggle3(){
    if(this.status3=='third')
    this.status3='none';
    else
      this.status3='third';
  }
  toggle4(){
    if(this.status4=='forth')
    this.status4='none';
    else
      this.status4='forth';
  }


  filterFunction(actualValue:string,typeFilter:string){
    if(this.curentFilter==typeFilter&&this.curentValueFilter==actualValue)  
    {
      this.curentFilter='none';
      this.curentValueFilter='none';
    }
    else {
      this.curentFilter=typeFilter;
      this.curentValueFilter=actualValue;
    }

  }
 

}
