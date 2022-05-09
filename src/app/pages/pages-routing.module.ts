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
const routes: Routes = [
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '', component: HomeComponent },
  { path: 'buy-a-watch', component: BuyAWatchComponent },
  { path: 'favorite-list', component: FavoriteListComponent },
  { path: 'profil', component: ProfilUtilizatorCumparatorComponent, canActivate: [AuthGuard] },
  { path: 'form', component: FormAddproductComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'categories', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
