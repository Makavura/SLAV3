import { Injectable } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private firestore: AngularFirestore) { }
  form = new FormGroup({
    name: new FormControl(''),
    price: new FormControl('')
  });

  createItem(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('items').add(data).then(res => {}, err => reject(err));
    }
    )
  }


  updateItem(data) {
    return this.firestore
      .collection('items')
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getItems() {
    return this.firestore.collection('items').snapshotChanges();
  }

  deleteItem(data) {
    return this.firestore
      .collection('items')
      .doc(data.payload.doc.id)
      .delete();
  }
}


export interface Item {
name: string;
price: number;
};
