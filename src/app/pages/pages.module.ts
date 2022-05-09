import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProfilUtilizatorCumparatorComponent } from './components/profil-utilizator-cumparator/profil-utilizator-cumparator.component';
import { HomeComponent } from './components/home/home.component';
import { BuyAWatchComponent } from './components/buy-a-watch/buy-a-watch.component';

import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { FormAddproductComponent } from './components/form-addproduct/form-addproduct.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductCardComponent } from './components/shopping-cart/components/product-card/product-card.component';
import { SummaryCardComponent } from './components/shopping-cart/components/summary-card/summary-card.component';
import { ShoppingCartCheckoutComponent } from './components/shopping-cart-checkout/shopping-cart-checkout.component';
import { CheckoutSummaryCardComponent } from './components/shopping-cart-checkout/components/checkout-summary-card/checkout-summary-card.component';
import { SellerProfileBuyerPerspectiveComponent } from './components/seller-profile-buyer-perspective/seller-profile-buyer-perspective.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    HomeComponent,
    BuyAWatchComponent,
    FavoriteListComponent,
    ProfilUtilizatorCumparatorComponent,
    HomeComponent,
    FormAddproductComponent,
    AboutUsComponent,
    ProductCardComponent,
    SummaryCardComponent,
    ShoppingCartCheckoutComponent,
    CheckoutSummaryCardComponent,
    SellerProfileBuyerPerspectiveComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    ShoppingCartComponent,
    HomeComponent,
    BuyAWatchComponent,
    FavoriteListComponent,
    ProfilUtilizatorCumparatorComponent,
    HomeComponent,
    FormAddproductComponent
  ]
})
export class PagesModule { }
