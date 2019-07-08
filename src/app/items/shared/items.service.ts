import { Injectable } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { resolve, reject } from 'q';
import { map } from 'rxjs/operators';

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
  public myItems: any;
  public lalala: any;
  public malala: any;

  createItem(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('items').add(data).then(res => {}, err => reject(err));
    }
    );
  }

  getItems() {
    return this.firestore.collection('items').snapshotChanges();

  }
}



export interface Item {
name: string;
price: number;
}
