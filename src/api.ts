import { Dispatch } from 'redux';
import { loadTodosAction } from './reducers/todosReducer';

const todosApi = 'https://mate.academy/students-api/todos';
// const usersApi = 'https://mate.academy/students-api/users';

export const loadTodos = (dispatch: Dispatch) => fetch(todosApi)
  .then((response) => response.json())
  .then((todos) => dispatch(loadTodosAction(todos)));
