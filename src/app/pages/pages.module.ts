import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProfilUtilizatorCumparatorComponent } from './components/profil-utilizator-cumparator/profil-utilizator-cumparator.component';
import { HomeComponent } from './components/home/home.component';
import { BuyAWatchComponent } from './components/buy-a-watch/buy-a-watch.component';

import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { FormAddproductComponent } from './components/form-addproduct/form-addproduct.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    HomeComponent,
    BuyAWatchComponent,
    FavoriteListComponent,
    ProfilUtilizatorCumparatorComponent,
    HomeComponent,
    FormAddproductComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    ShoppingCartComponent
  ]
})
export class PagesModule { }
