import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProfilUtilizatorCumparatorComponent } from './components/profil-utilizator-cumparator/profil-utilizator-cumparator.component';
const routes: Routes = [
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'profil', component: ProfilUtilizatorCumparatorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
