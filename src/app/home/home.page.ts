import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Moneyitems } from '../../models/money';
import { Observable } from 'rxjs';
import { MoneyService } from '../../services/money.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

moneyItems$: Observable<Moneyitems[]>;

constructor(private moneyList: MoneyService) {
  this.moneyItems$ = this.moneyList
    .getmoneylist()
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
updatemoney(moneyitems) {
this.moneyList.updatemoneylist(moneyitems);
console.log(moneyitems);
  }
}
