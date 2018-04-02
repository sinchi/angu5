import { Todo } from './todo';
import { ADD, DELETE_ALL, REMOVE, DONE } from './actions';

export interface IAppState {
  todos: Todo[];
  count: number;
  lastUpdate: Date;
}

export const INITIAL_STATE = {
  todos: [],
  count: 0,
  lastUpdate: null
};

export function rootReducer(state: IAppState, action) {
  switch (action.type) {
    case ADD : {
      const todos = state.todos;
      const todo = new Todo();
      todo.id = Math.random();
      todo.name = action.payload;
      state.todos.push(todo);
      return {
        ...state,
        todos: state.todos,
        count: state.count + 1,
        lastUpdate: new Date()
       };
    }
    case DONE: {
      const todo = action.payload;
      state.todos.forEach(t => {
        if (t.id === todo.id) {
          t.done = !t.done;
        }
      });
      return { ...state, lastUpdate: new Date() };
    }
    case REMOVE: {
      const todo = action.payload;
      return {
        ...state,
        todos: state.todos.filter( t => t.id !== todo.id ),
        count: state.count - 1,
        lastUpdate: new Date()
       };
    }
    case DELETE_ALL: {
      return { ...state, todos: [], count: 0, lastUpdate: new Date() };
    }
  }
  return state;
}
