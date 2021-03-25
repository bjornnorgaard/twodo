import { Component, Input } from '@angular/core';
import { Todo } from '../state/todo.model';
import { TodoService } from '../state/todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  @Input() public todo!: Todo;

  constructor(private todoService: TodoService) {
  }

  public toggleComplete(): void {
    this.todoService.toggleComplete(this.todo);
  }

  public delete(): void {
    this.todoService.remove(this.todo.id);
  }
}
