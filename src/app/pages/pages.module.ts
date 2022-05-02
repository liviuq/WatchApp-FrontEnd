import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProfilUtilizatorCumparatorComponent } from './components/profil-utilizator-cumparator/profil-utilizator-cumparator.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    ProfilUtilizatorCumparatorComponent
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
