import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../state';
import { ADD } from '../actions';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title = 'Todo List';
  @select('todos') todos;
  @select('count') counter;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  add(event, todo): void {
    if (event.key !== '' && event.key === 'Enter') {
      this.addTodo(todo);
    }
  }

  addTodo(todo): void {
    if (todo.value && todo.value.trim().length > 0) {
      this.ngRedux.dispatch({ type: ADD, payload: todo.value });
      todo.value = '';
    }
  }


}
