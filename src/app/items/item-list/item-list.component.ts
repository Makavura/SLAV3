import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { AngularFirestore } from '@angular/fire/firestore';
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

  // constructor(private itemService: ItemsService) { }
  }
  ngOnInit() {
   this.itemService.getItems();
  }

  itemis;

  getItems = () => this.itemService.getItems().subscribe(res => (this.itemis = res));


}
