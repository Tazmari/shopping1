import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Shoppingitems } from '../models/shoppingitem';

@Injectable()
export class ShoplistService {
  private shoplistref = this.afDatabase.list<Shoppingitems>(`shopping-list`);

  constructor(private afDatabase: AngularFireDatabase) { }

  getshoplist() {
    return this.shoplistref;
  }
  addshoplist(shoppingitems: Shoppingitems) {
return this.shoplistref.push(shoppingitems);
  }
  async removeItem(shoppingitems: Shoppingitems) {
    return await this.shoplistref.remove(shoppingitems.key) ;
  }
}
