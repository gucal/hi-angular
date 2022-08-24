import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  todos: Todo[] = [
    {
      id: 1,
      text: 'Angular ogren',
      checked: false,
    },
    {
      id: 2,
      text: 'Angular todo ekle',
      checked: false,
    },
    {
      id: 3,
      text: 'Angular todo sil',
      checked: true,
    },
  ];

  selectedTodo?: Todo;

  onSelect(selectTodo: Todo): void {
    this.selectedTodo = selectTodo;
  }

  ngOnInit(): void {}
}
