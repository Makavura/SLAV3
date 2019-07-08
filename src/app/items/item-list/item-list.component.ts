
import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../shared/items.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})


export class ItemListComponent implements OnInit {

  items: Observable<any[]>;
  itemis: Item[];
  ittems: any;

  constructor(db: AngularFirestore, private itemService: ItemsService) {
    this.items = db.collection('items').valueChanges();

  }

  ngOnInit() {

   this.itemService.getItems();
  //  this.items.subscribe(val => console.log(val));
   this.items.subscribe(data => {
    // console.log(data);
    this.itemis = data.map(e => {
      // console.log(e, data, data.length);
      // for (dat in data ) {
      //   console.log(dat)
      // }
      // let i =0;
      // while(i < data.length){
        var titems: number[] = []
      for(var t= 0; t<data.length; t++ ) {
         
         titems.push(data[t].price)
        }
        var total = titems.reduce(function(a,b){return a+b})
        console.log(titems, total, titems.length)
      // }
      return {
        id: e.payload.doc.id,
        data,
        ...e
      } as Item;
    });
  });

  // const totalPrice =

  }

  getItems() {
  this.itemService.getItems();
  }


}


