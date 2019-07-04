import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
// import { Item } from './items/shared/item';
// import { NgModule } from '@angular/core';
// export interface item {
//   name: string,
//   price: number
// }
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
  //  items: Observable<any[]>;
  // constructor(db: AngularFirestore) {
    constructor() {
    // this.items = (db.collection('items').valueChanges());
    // this.items = (db.collection('items').snapshotChanges());
    // console.log(this.items);
  }

}
