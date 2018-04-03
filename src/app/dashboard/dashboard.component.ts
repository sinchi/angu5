import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Todo } from '../todo';
import { IAppState } from '../state';
import { DELETE_ALL } from '../actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';
  @select('count') counter;
  @select('lastUpdate') updated;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  deleteAll(): void {
    this.ngRedux.dispatch({ type: DELETE_ALL });
  }

}
