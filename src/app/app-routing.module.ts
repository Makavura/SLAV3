import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './items/login/login.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemsComponent } from './items/items/items.component';
import { AppComponent } from '../app/app.component';
import { AngularFireAuthGuard ,redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
import { ShoppingComponent } from './items/shopping/shopping.component';
import { PagenotfoundComponent } from './items/pagenotfound/pagenotfound.component';

const redirectUnauthorizedToLogin = redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = redirectLoggedInTo(['shopping-list']);

const routes: Routes = [
  { path: '', component: ItemListComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'login', component: LoginComponent, },
  { path: 'add-item', component: ItemsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  // { path: 'items', component: ItemListComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: '**', component: PagenotfoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
