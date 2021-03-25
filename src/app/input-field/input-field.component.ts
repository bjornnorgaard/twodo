import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoService } from '../state/todo.service';
import { createTodo } from '../state/todo.model';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {

  public inputControl = new FormControl('', [Validators.required, Validators.minLength(2)]);

  constructor(private todoService: TodoService) {
  }

  public submit(): void {
    if (this.inputControl.valid) {
      this.todoService.add(createTodo(this.inputControl.value));
      this.inputControl.reset();
    }
  }

}
