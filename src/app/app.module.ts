import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsService } from './items/shared/items.service';
import { ItemsComponent } from './items/items/items.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './items/shared/auth.service';
import { LoginComponent } from './items/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { ShoppingComponent } from './items/shopping/shopping.component';
import { PagenotfoundComponent } from './items/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemListComponent,
    LoginComponent,
    ShoppingComponent,
    PagenotfoundComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ItemsService,
  AuthService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
