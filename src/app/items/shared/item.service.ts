import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Item } from './item';

@Injectable()
export class ItemService {

  private basePath: string = '/items';

  // items: FirebaseListObservable<Item[]> = null; //  list of objects
  // item: FirebaseObjectObservable<Item> = null; //   single object

  constructor(private db: AngularFireDatabase) { }
}