import { Component, Input } from '@angular/core';
import { TodoService } from '../state/todo.service';
import { TodoQuery } from '../state/todo.query';
import { Todo } from '../state/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() public showCompleted = false;

  public todos$: Observable<Todo[]> = this.todoQuery
    .selectAll({filterBy: t => t.completed === this.showCompleted});

  constructor(
    private todoService: TodoService,
    private todoQuery: TodoQuery
  ) {
  }

}
