import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { TodoStore } from './todo.store';

@Injectable({providedIn: 'root'})
export class TodoService {

  constructor(private todoStore: TodoStore) {
  }

  public add(todo: Todo): void {
    this.todoStore.add(todo);
  }

  public update(id: string, todo: Todo): void {
    this.todoStore.update(id, todo);
  }

  public remove(id: string): void {
    this.todoStore.remove(id);
  }

  public toggleComplete(todo: Todo): void {
    const updatedTodo = {...todo};
    updatedTodo.completed = !todo.completed;
    this.todoStore.update(todo.id, updatedTodo);
  }
}
