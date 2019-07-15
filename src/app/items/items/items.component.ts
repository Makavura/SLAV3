import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../shared/items.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public onlyForm = this.itemsService.form ;
  constructor( private itemsService: ItemsService) { }

ngOnInit() { }
  onSubmit() {
    // tslint:disable-next-line: prefer-const
    let data = this.itemsService.form.value;
    console.log(data);
    this.itemsService.createItem(data);
    this.reset();
  }
  reset() {
    this.itemsService.resetForm();
  }
}
