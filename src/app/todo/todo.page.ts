import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Todoitems } from '../../models/todo';
import { TodolistService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  todoitems: Todoitems = {
    category: '',
    action: ''
};

  todoItems$: Observable<Todoitems[]>;

  constructor(private todoList: TodolistService, private router: Router) {
    this.todoItems$ = this.todoList
      .gettodolist()
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
  async removetodoItems(todoitems: Todoitems) {
  await this.todoList.removeItem(todoitems);
  }
}
