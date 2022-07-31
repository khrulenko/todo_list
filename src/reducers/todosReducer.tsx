import { AnyAction } from 'redux';

export type Todo = {
  id: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  title: string;
  completed: boolean;
};

export type Todos = Array<Todo>;

const SET_TODOS = 'SET/TODOS';

export const setTodosAction = (todos: Todos) => ({
  type: SET_TODOS,
  payload: todos,
});

const todosReducer = (state: Todos = [], action: AnyAction) => {
  switch (action.type) {
    case SET_TODOS:
      return [...action.payload];

    default:
      return state;
  }
};

export default todosReducer;
