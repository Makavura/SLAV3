import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './items/login/login.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemsComponent } from './items/items/items.component';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';
import { PagenotfoundComponent } from './items/pagenotfound/pagenotfound.component';

const redirectUnauthorizedToLogin = redirectUnauthorizedTo(['login']);
const routes: Routes = [
  { path: '', component: ItemListComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'login', component: LoginComponent, },
  { path: 'add-item', component: ItemsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: '**', component: PagenotfoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
