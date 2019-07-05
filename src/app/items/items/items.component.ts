import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../shared/items.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  // name = this.itemsService.form.value.name;
  // price = this.itemsService.form.value.price;
  // data = (this.name, this.price );

  constructor( private itemsService: ItemsService) { };

ngOnInit() {
}
  // item = [];

  


  onSubmit() {
    // this.itemsService.form.value.name = this.item;
    let data = this.itemsService.form.value;
    this.itemsService.createItem(data).then(res => {} )
    this.reset();
  }

  reset() {
    this.itemsService.form.reset();
}

}
