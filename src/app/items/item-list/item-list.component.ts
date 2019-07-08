
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
  itemTable: any;
  lessons  = []

  constructor(db: AngularFirestore, private itemService: ItemsService) {
    this.items = db.collection('items').valueChanges();

  //   db.collection('items').get().then( z => querySnapshot => {
  //     querySnapshot.forEach(y => doc => {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log(doc.id, " => ", doc.data());
  //     });
  // });
  }

  ngOnInit() {
   this.itemService.getItems();
  //  this.items.subscribe(val => (console.log(this.itemService.anan()))
   this.items.subscribe(lessons => this.lessons = lessons)
   console.log(this.lessons);
   return this.lessons;


 
  //  console.log()
  }



  getItems() {
  this.itemService.getItems();
  }


}


