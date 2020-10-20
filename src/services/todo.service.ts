import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Todoitems } from '../models/todo';

@Injectable()
export class TodolistService {

  private todolistref = this.afDatabase.list<Todoitems>(`todo-list`);

  constructor(private afDatabase: AngularFireDatabase) { }

  gettodolist() {
    return this.todolistref;
  }
  addtodolist(todoitems: Todoitems) {
return this.todolistref.push(todoitems);
  }
  async removeItem(todoitems: Todoitems) {
    return await this.todolistref.remove(todoitems.key) ;
  }
}
