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

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemListComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
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
