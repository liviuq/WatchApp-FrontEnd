import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/home/home.component';
import { BuyAWatchComponent } from './components/buy-a-watch/buy-a-watch.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
const routes: Routes = [
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '', component: HomeComponent },
  { path: 'buy-a-watch', component: BuyAWatchComponent },
  { path: 'favorite-list', component: FavoriteListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }