import { Injectable } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { } from '../shared/item';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  userId: string;
  item: AngularFireList<Item>;
  constructor(
    public firestore: AngularFirestore,
    public afsAuth: AngularFireAuth,
     ) {
    this.afsAuth.authState.subscribe(user => {
      if (user) { this.userId = user.uid; }
    });
  }
    public form = new FormGroup({
     name: new FormControl(''),
    price: new FormControl(''),
  });
  createItem(item: Item) { return new Promise<any>((resolve, reject) => {
      item.userId = this.userId;
      console.log(this.userId);
      this.firestore.collection('items').add(item).then(res => {}, err => reject(err)); });}
  getItems() { return this.firestore.collection('items').snapshotChanges(); 
}
  resetForm() {
    this.form.reset();
  }
}
export interface Item {
name: string;
price: number;
userId: string;
}
