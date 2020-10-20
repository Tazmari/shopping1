import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Shoppingitems } from '../../models/shoppingitem';
import { Observable } from 'rxjs';
import { ShoplistService } from '../../services/shoplist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.page.html',
  styleUrls: ['./shoplist.page.scss'],
})
export class ShoplistPage implements OnInit {
  shoppingitems: Shoppingitems = {
    category: '',
    key: '',
    item: '',
    quantity: undefined,
};

  shoppingItems$: Observable<Shoppingitems[]>;

  constructor(private shoppingList: ShoplistService, private router: Router) {
    this.shoppingItems$ = this.shoppingList
      .getshoplist()
      .snapshotChanges()
      .pipe(map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        }
      ));
      }

  ngOnInit() {
  }
  addItem() {
    this.router.navigate(['additem']);
  }
  async removeItems(shoppingitems: Shoppingitems) {
  await this.shoppingList.removeItem(shoppingitems);
  }
}
