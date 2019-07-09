
import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../shared/items.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})


export class ItemListComponent implements OnInit {

  items: Observable<any[]>;
  itemis: Item[];
  ittems: any;
  totalsCount: any =[]

  constructor(db: AngularFirestore, private itemService: ItemsService, private login: LoginComponent) {
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
    this.login.getName();
    this.itemService.getItems();
    this.items.subscribe(data => {
      this.itemis = data.map(e => {
        // tslint:disable-next-line: prefer-const
        let allItemsPrices: number[] = [];
        // tslint:disable-next-line: prefer-const
        // tslint:disable-next-line: prefer-for-of
        for (let t = 0; t < data.length; t++) { allItemsPrices.push(data[t].price) }
        // tslint:disable-next-line: prefer-const
        let total = allItemsPrices.reduce(function (a, b) { return a + b })
        console.log(total, allItemsPrices.length);
        // tslint:disable-next-line: prefer-const
        let itemsArrayLength = allItemsPrices.length;
        this.totalsCount.push(total, itemsArrayLength);
        return { data, ...e, total, itemsArrayLength }; }); }); }


   getItems() {
    this.itemService.getItems();
  }

}


