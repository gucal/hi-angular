import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input() todos?: Todo[];
  value?: string;
  isError?: boolean;

  addTodo(): void {
    if (!this.value?.trim()) {
      this.isError = true;
      return;
    }
    this.todos?.push({
      id: this.todos.length,
      text: this.value || '',
      checked: false,
    });
    this.value = '';
  }

  ngOnInit(): void {}
}
