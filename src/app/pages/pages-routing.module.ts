import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProfilUtilizatorCumparatorComponent } from './components/profil-utilizator-cumparator/profil-utilizator-cumparator.component';
import { HomeComponent } from './components/home/home.component';
import { BuyAWatchComponent } from './components/buy-a-watch/buy-a-watch.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { FormAddproductComponent } from './components/form-addproduct/form-addproduct.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ShoppingCartCheckoutComponent } from './components/shopping-cart-checkout/shopping-cart-checkout.component';
import { SellerProfileBuyerPerspectiveComponent } from './components/seller-profile-buyer-perspective/seller-profile-buyer-perspective.component';
import { AdviceForSellersComponent } from './components/advice-for-sellers/advice-for-sellers.component';
import { SellingAWatchComponent } from './components/selling-a-watch/selling-a-watch.component';
import { CaringForYourWatchComponent } from './components/caring-for-your-watch/caring-for-your-watch.component';
import { PhotographingAWatchComponent } from './components/photographing-a-watch/photographing-a-watch.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: 'cart/products', component: ShoppingCartComponent },
  { path: 'cart/checkout', component: ShoppingCartCheckoutComponent },
  { path: '', component: HomeComponent },
  { path: 'buy-a-watch', component: BuyAWatchComponent },
  { path: 'favorite-list', component: FavoriteListComponent },
  { path: 'profil', component: ProfilUtilizatorCumparatorComponent, canActivate: [AuthGuard] },
  { path: 'form', component: FormAddproductComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'categories', component: CategoriesComponent },
  {path: 'profil', component: ProfilUtilizatorCumparatorComponent, canActivate: [AuthGuard]},
  {path: 'form', component: FormAddproductComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'seller', component: SellerProfileBuyerPerspectiveComponent},
  {path: 'seller/:id', component: SellerProfileBuyerPerspectiveComponent},
  {path: 'advice-for-sellers', component: AdviceForSellersComponent},
  {path: 'advice-for-sellers/selling-a-watch', component: SellingAWatchComponent},
  {path: 'advice-for-sellers/caring-for-your-watch', component: CaringForYourWatchComponent},
  {path: 'advice-for-sellers/photographing-a-watch', component: PhotographingAWatchComponent},
  {path: 'product/:id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
