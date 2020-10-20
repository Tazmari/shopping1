import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Moneyitems } from '../models/money';

@Injectable()
export class MoneyService {
  private moneylistref = this.afDatabase.list<Moneyitems>(`money-list`);

  constructor(private afDatabase: AngularFireDatabase) { }

  getmoneylist() {
    return this.moneylistref;
  }
  addmoneylist(moneyitems: Moneyitems) {
    return this.moneylistref.push(moneyitems);
  }
  updatemoneylist(moneyitems) {
    return this.moneylistref.update(moneyitems.key, moneyitems);
  }
}
