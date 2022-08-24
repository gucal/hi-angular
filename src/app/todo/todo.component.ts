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
