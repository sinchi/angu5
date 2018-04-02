import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../state';
import { REMOVE, DONE } from '../actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  done(todo): void {
    this.ngRedux.dispatch({ type: DONE, payload: todo });
  }

  remove(todo): void {
    this.ngRedux.dispatch({ type: REMOVE, payload: todo });
  }

}
