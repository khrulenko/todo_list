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

// Action types - is just a constant. MUST have a unique value.
const LOAD_TODOS = 'TODOS/LOAD';

// Action creators - a function returning an action object
export const loadTodosAction = (todos: Todos) => ({
  type: LOAD_TODOS,
  payload: todos,
});

const todosReducer = (state: Todos = [], action: AnyAction) => {
  switch (action.type) {
    case LOAD_TODOS:
      return [...action.payload];

    default:
      return state;
  }
};

export default todosReducer;
