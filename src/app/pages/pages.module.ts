import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/home/home.component';
import { BuyAWatchComponent } from './components/buy-a-watch/buy-a-watch.component';

import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    HomeComponent,
    BuyAWatchComponent,

    FavoriteListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    ShoppingCartComponent
  ]
})
export class PagesModule { }
