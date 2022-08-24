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

  addTodo(): void {
    if (!this.value?.trim()) {
      alert('invalid!');
      return;
    }
    this.todos?.push({
      id: this.todos.length + 1,
      text: this.value || '',
      checked: false,
    });
    this.value = '';
  }

  ngOnInit(): void {}
}
