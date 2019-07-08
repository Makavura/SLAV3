import { Injectable } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { resolve, reject } from 'q';
import { map } from 'rxjs/operators';
import { } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public tables: [];

  constructor(private firestore: AngularFirestore) { }
  form = new FormGroup({
    name: new FormControl(''),
    price: new FormControl('')
  });

  createItem(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('items').add(data).then(res => {}, err => reject(err));
    }
    );
  }

  getItems() {
    return this.firestore.collection('items').snapshotChanges();

  }

  resetForm() {
    this.form.reset();
  }

}



export interface Item {
name: string;
price: number;
}
