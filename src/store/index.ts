import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import requestErrorReducer from '../reducers/requestErrorReducer';
import todosReducer, { Todos } from '../reducers/todosReducer';
import userReducer, { User } from '../reducers/userReducer';

export type State = {
  todos: Todos;
  user: User;
  requestError: string | null;
};

// Selectors - a function receiving Redux state and returning some data from it
export const getTodos = (state: State) => state.todos;
export const getUser = (state: State) => state.user;
export const geRequestError = (state: State) => state.requestError;

// rootReducer - this function is called after dispatching an action
const rootReducer = combineReducers<State>({
  todos: todosReducer,
  user: userReducer,
  requestError: requestErrorReducer,
});

// The `store` should be passed to the <Provider store={store}> in `/src/index.tsx`
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // allows you to use http://extension.remotedev.io/
);

export default store;
