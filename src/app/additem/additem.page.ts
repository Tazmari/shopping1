import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shoppingitems } from '../../models/shoppingitem';
import { ShoplistService } from '../../services/shoplist.service';
import { Todoitems } from '../../models/todo';
import { TodolistService } from '../../services/todo.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
})
export class AdditemPage implements OnInit {

  shoppingitems: Shoppingitems = {
    category: '',
    item: '',
    quantity: undefined
};

todoitems: Todoitems = {
  category: '',
  action: ''
};
  constructor(private shoppingList: ShoplistService, private router: Router, private todoList: TodolistService) {
  }
  ngOnInit() {
  }
  addshoplist(shoppingitems: Shoppingitems) {
    this.shoppingList.addshoplist(shoppingitems);
    this.router.navigate(['shoplist']);
    }
    addtodolist(todoitems: Todoitems) {
      this.todoList.addtodolist(todoitems);
      this.router.navigate(['todo']);
      }
}
