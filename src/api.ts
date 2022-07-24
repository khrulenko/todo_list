import { Dispatch } from 'redux';
import { setRequestError } from './reducers/requestErrorReducer';
import { setTodosAction } from './reducers/todosReducer';
import { setUserAction } from './reducers/userReducer';

const url = 'https://mate.academy/students-api/';
const todosApi = url + 'todos/';
const usersApi = url + 'users/';

const createUserLoadError = (endPoint: string | number) =>
  `threre are some issues to load a user with ID ${endPoint}`;

export const loadTodos = (dispatch: Dispatch) =>
  fetch(todosApi)
    .then((response) => response.json())
    .then((data) => dispatch(setTodosAction(data)));

export const loadUser = (dispatch: Dispatch, endPoint: string | number = '') =>
  fetch(usersApi + endPoint)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setRequestError(null));
      dispatch(setUserAction(data));
    })
    .catch(() => {
      dispatch(setUserAction(null));
      dispatch(setRequestError(createUserLoadError(endPoint)));
    });
