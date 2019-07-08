import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../shared/items.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor( private itemsService: ItemsService) { };

ngOnInit() {
}


  onSubmit() {
    let data = this.itemsService.form.value;
    this.itemsService.createItem(data).then(res => {} )
    this.reset();
  }

  reset() {
    this.itemsService.resetForm();
}

}
