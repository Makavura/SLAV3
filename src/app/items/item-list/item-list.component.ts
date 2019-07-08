
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


  constructor(db: AngularFirestore, private itemService: ItemsService) {
    this.items = db.collection('items').valueChanges();

  }

  ngOnInit() {
   this.itemService.getItems();
   this.items.subscribe(val => console.log(val));
   // returns an array
  }



  getItems() {
  this.itemService.getItems();
  }


}


