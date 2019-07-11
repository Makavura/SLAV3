import { Injectable } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { } from '../shared/item';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  userId: string;
  item: AngularFireList<Item>;
  // likidy: any;
  constructor(
    public firestore: AngularFirestore,
    public afsAuth: AngularFireAuth,
    // public db: AngularFireDatabase
     ) {
    this.afsAuth.authState.subscribe(user => {
      if (user) { this.userId = user.uid; }
    });
    // this.items = db.list('items');
    // this.likidy = this.db.list(`items/${this.userId}`);
  }
    public form = new FormGroup({
     name: new FormControl(''),
    price: new FormControl(''),
  });
  createItem(item: Item) { return new Promise<any>((resolve, reject) => {
      item.userId = this.userId;
      // this.item.push(item);
      console.log(this.userId);
      this.firestore.collection('items').add(item).then(res => {}, err => reject(err)); });}
  getItems() { return this.firestore.collection('items').snapshotChanges(); } // my boo: usher & keys;
  // : AngularFireList<Item> {
    // tslint:disable-next-line: curly
    // if (!this.userId) return;
    // this.items = this.db.list('items/',  ref => ref.orderByChild('userId').equalTo('this.userId'));
    // this.items = this.db.list(`items/${this.userId}`);
    // this.items.snapshotChanges();
    // console.log(this.items);
    // return this.items;}
  // createItem(item: Item) {
  //   item.userId = this.userId;
  //   this.items.push(item);
  //   console.log(this.userId);
  // }

  resetForm() {
    this.form.reset();
  }
}
export interface Item {
name: string;
price: number;
userId: string;
}
