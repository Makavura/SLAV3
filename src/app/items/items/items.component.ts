import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items = [
    'kuku',
    'njoti',
    'ndukulu'
  ];

  addItem = item => this.items.push(item);

  removeItem = item => {
    let index = this.items.indexOf(item);
    if (index > -1) { this.items.splice(index, 1); }
  };

  onSubmit () {
    
  };

  constructor( private itemsService: ItemsService) { }

  ngOnInit() {
  }


}
