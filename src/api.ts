import { Dispatch } from 'redux';
import { endLoading, startLoading } from './reducers/loadingReducer';
import { setRequestError } from './reducers/requestErrorReducer';
import { setTodosAction } from './reducers/todosReducer';
import { setUserAction } from './reducers/userReducer';

const url = 'https://mate.academy/students-api/';
const todosApi = url + 'todos/';
const usersApi = url + 'users/';

const createUserLoadError = (endPoint: string | number) =>
  `Error loading a user ${endPoint}`;

export const loadTodos = (dispatch: Dispatch) =>
  fetch(todosApi)
    .then((response) => response.json())
    .then((data) => dispatch(setTodosAction(data)));

export const loadUser = (
  dispatch: Dispatch,
  endPoint: string | number = ''
) => {
  dispatch(startLoading(endPoint));

  return fetch(usersApi + endPoint)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setUserAction(data));
      dispatch(endLoading());
    })
    .catch(() => {
      dispatch(setRequestError(createUserLoadError(endPoint)));
      dispatch(endLoading());
      setTimeout(() => dispatch(setRequestError(null)), 1500);
    });
};
