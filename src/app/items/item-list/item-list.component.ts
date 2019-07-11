
import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../shared/items.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
// import { LoginComponent } from '../login/login.component';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Observable<any[]>;
  itemis: Item[];
  userItems: any = [];
  totalsCount: any = [];
  userId: string;
  constructor(
    db: AngularFirestore,
    private itemService: ItemsService,
    public afsAuth: AngularFireAuth
    ) {
    // public db: AngularFireDatabase ) {
    this.items = db.collection('items').valueChanges();
    // this.items = db.list('items').valueChanges();
    this.afsAuth.authState.subscribe(user => {
      if (user) { this.userId = user.uid; }
    });
  }
  ngOnInit() {
    this.getItems();
    this.items.subscribe(data => {
      this.itemis = data.map(e => {
        console.log(data);
        // tslint:disable-next-line: prefer-const
        let allItemsPrices: number[] = [];
        // tslint:disable-next-line: prefer-const
        // tslint:disable-next-line: prefer-for-of
        for (let k = 0; k < data.length; k++)
        // if(data[k].userId === this.userId) 
        {this.userItems = data.filter(data => data.userId === this.userId)}
        // { this.userItems.push(data[k]); 
        console.log(this.userItems)
      // }
        for (let t = 0; t < this.userItems.length; t++) { allItemsPrices.push(this.userItems[t].price); }
        // tslint:disable-next-line: prefer-const
        let total = allItemsPrices.reduce(function (a, b) { return a + b })
        // tslint:disable-next-line: prefer-const
        let itemsArrayLength = allItemsPrices.length;
        this.totalsCount.push(total, itemsArrayLength);
        return { data, ...e, total, itemsArrayLength }; }); }); 
  }
   getItems() {
    this.itemService.getItems();
  }

}


