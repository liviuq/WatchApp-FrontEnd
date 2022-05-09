import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-profile-buyer-perspective',
  templateUrl: './seller-profile-buyer-perspective.component.html',
  styleUrls: ['./seller-profile-buyer-perspective.component.css']
})
export class SellerProfileBuyerPerspectiveComponent implements OnInit {

  public status1: 'none' | 'first'  = 'none';
  public status2: 'none' | 'secound'  = 'none';
  public status3: 'none' | 'third'  = 'none';
  public status4: 'none' | 'forth'  = 'none';
  constructor() { }

  ngOnInit(): void {
  }
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


}
