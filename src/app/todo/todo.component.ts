import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  todo: Todo = {
    id: 1,
    text: 'Angular ogren',
    checked: false,
  };

  ngOnInit(): void {}
}
