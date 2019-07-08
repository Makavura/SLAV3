
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
  xxx:any =[]

  constructor(db: AngularFirestore, private itemService: ItemsService) {
    this.items = db.collection('items').valueChanges();

  }

  ngOnInit() {

    this.itemService.getItems();
    //  this.items.subscribe(val => console.log(val));
    this.items.subscribe(data => {
      // console.log(data);
      this.itemis = data.map(e => {
        var titems: number[] = []
        var sumTotal: number[] = [];
        for (var t = 0; t < data.length; t++) {

          titems.push(data[t].price)
        }
        var total = titems.reduce(function (a, b) { return a + b })
        console.log(total, titems.length)
        var titemL = titems.length;
        // var xxx = sumTotal.push(total, titems.length)
        // console.log(xxx)
        // return xxx
        this.xxx.push(total, titemL)
        return {
          data,
          ...e,
          total,
          titemL
          
        }
      });

    });
  }

  getItems() {
    this.itemService.getItems();
  }

}


