import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';


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
import { CategoriesComponent } from './components/categories/categories.component';
import { ShoppingCartCheckoutComponent } from './components/shopping-cart-checkout/shopping-cart-checkout.component';
import { CheckoutSummaryCardComponent } from './components/shopping-cart-checkout/components/checkout-summary-card/checkout-summary-card.component';
import { SellerProfileBuyerPerspectiveComponent } from './components/seller-profile-buyer-perspective/seller-profile-buyer-perspective.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerProfileProductCardComponent } from './components/seller-profile-buyer-perspective/components/seller-profile-product-card/seller-profile-product-card.component';
import { PaginatorStyleDirective } from './components/seller-profile-buyer-perspective/paginator-style.directive';
import { AdviceForSellersComponent } from './components/advice-for-sellers/advice-for-sellers.component';
import { SellingAWatchComponent } from './components/selling-a-watch/selling-a-watch.component';
import { CaringForYourWatchComponent } from './components/caring-for-your-watch/caring-for-your-watch.component';
import { PhotographingAWatchComponent } from './components/photographing-a-watch/photographing-a-watch.component';
import { SearchbarComponent } from './components/home/components/searchbar/searchbar.component';
import { WatchCardComponent } from './components/home/components/watch-card/watch-card.component';
import { CategoriesCardComponent } from './components/home/components/categories-card/categories-card.component';
import { BuyAWatchCardComponent } from './components/buy-a-watch/components/buy-a-watch-card/buy-a-watch-card.component';
import { FavoriteWatchCardComponent } from './components/favorite-list/components/favorite-watch-card/favorite-watch-card.component';
import { ProductComponent } from './components/product/product.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';

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
    CategoriesComponent,
    ShoppingCartCheckoutComponent,
    CheckoutSummaryCardComponent,
    SellerProfileBuyerPerspectiveComponent,
    SellerProfileProductCardComponent,
    PaginatorStyleDirective,
    AdviceForSellersComponent,
    SellingAWatchComponent,
    CaringForYourWatchComponent,
    PhotographingAWatchComponent,
    SearchbarComponent,
    WatchCardComponent,
    CategoriesCardComponent,
    BuyAWatchCardComponent,
    FavoriteWatchCardComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxGalleryModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTabsModule
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
