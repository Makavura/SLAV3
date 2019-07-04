import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// @NgModule({
//   declarations: [],
//   imports: [],
//   exports: [
//     AngularFireDatabase,
//     Observable
//   ]
// })
export class AppComponent {
  
  title = 'SLAV3';
  items: Observable<any[]>;
  constructor(db: AngularFirestore) { 
    this.items = (db.collection('items').valueChanges());
    console.log(this.items)
  }
}
