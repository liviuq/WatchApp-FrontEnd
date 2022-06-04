import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '@auth0/auth0-angular';
import { BuyAWatchCardComponent } from '../buy-a-watch/components/buy-a-watch-card/buy-a-watch-card.component';
import { WatchCardComponent } from '../home/components/watch-card/watch-card.component';
import { ProductCardComponent } from '../shopping-cart/components/product-card/product-card.component';

@Component({
  selector: 'app-login-condition',
  templateUrl: './login-condition.component.html',
  styleUrls: ['./login-condition.component.css']
})
export class LoginConditionComponent implements OnInit {

  constructor(public auth: AuthService, public refDialog:MatDialogRef<WatchCardComponent>) { }

  close(){
    this.refDialog.close();
  }

  ngOnInit(): void {
  }

  loginWithRedirect(): void{
    this.auth.loginWithRedirect();
  }

}
