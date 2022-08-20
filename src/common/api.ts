import { Dispatch } from 'redux';
import {
  endLoadingTodos,
  endLoadingUser,
  startLoadingTodos,
  startLoadingUser,
} from '../data/reducers/loadingReducer';
import { setRequestError } from '../data/reducers/requestErrorReducer';
import { setTodosAction } from '../data/reducers/todosReducer';
import { setUserAction } from '../data/reducers/userReducer';
import { StrOrNum } from './types';

const url = 'https://jsonplaceholder.typicode.com/';
const todosApi = url + 'todos/';
const usersApi = url + 'users/';

const createUserLoadError = (endPoint: StrOrNum) =>
  `Error loading a user ${endPoint}`;

export const loadTodos = (dispatch: Dispatch) => {
  dispatch(startLoadingTodos());

  fetch(todosApi)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setTodosAction(data));
      dispatch(endLoadingTodos());
    });
};

export const loadUser = (dispatch: Dispatch, endPoint: StrOrNum = '') => {
  dispatch(startLoadingUser(endPoint));

  fetch(usersApi + endPoint)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setUserAction(data));
      dispatch(endLoadingUser());
    })
    .catch(() => {
      dispatch(setRequestError(createUserLoadError(endPoint)));
      dispatch(endLoadingUser());
      setTimeout(() => dispatch(setRequestError(null)), 1500);
    });
};
