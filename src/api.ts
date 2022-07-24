import { Dispatch } from 'redux';
import { setTodosAction } from './reducers/todosReducer';
import { setUserAction } from './reducers/userReducer';

const url = 'https://mate.academy/students-api/';
const todosApi = url + 'todos/';
const usersApi = url + 'users/';

export const loadTodos = (dispatch: Dispatch) =>
  fetch(todosApi)
    .then((response) => response.json())
    .then((data) => dispatch(setTodosAction(data)));

export const loadUser = (dispatch: Dispatch, endPoint: string | number = '') =>
  fetch(usersApi + endPoint)
    .then((response) => response.json())
    .then((data) => dispatch(setUserAction(data)))
    .catch(() =>
      dispatch(
        setUserAction({
          id: `threre are some issues to load a user with ID ${endPoint}`,
        })
      )
    );
