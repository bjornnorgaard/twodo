import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

  public inputControl = new FormControl('', [Validators.required, Validators.minLength(2)]);

  constructor() {
  }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.inputControl.invalid) {
      return;
    } else {
      this.inputControl.reset();
      console.log('Submitting form');
    }
  }

}
