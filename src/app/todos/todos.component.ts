import { Component, OnInit } from '@angular/core';
import { Todo } from './todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  todos: Todo[] = [];

  onCompleted(selectTodoID: number): void {
    const currentIndex = this.todos.findIndex(
      (todo) => todo.id === selectTodoID
    );
    this.todos[currentIndex] = {
      ...this.todos[currentIndex],
      checked: !this.todos[currentIndex].checked,
    };
  }

  ngOnInit(): void {}
}
