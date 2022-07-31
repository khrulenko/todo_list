import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import loadingReducer, { Loading } from '../reducers/loadingReducer';
import requestErrorReducer from '../reducers/requestErrorReducer';
import todosReducer, { Todos } from '../reducers/todosReducer';
import userReducer, { User } from '../reducers/userReducer';

export type State = {
  todos: Todos;
  user: User;
  requestError: string | null;
  loading: Loading;
};

// selectors
export const getTodos = (state: State) => state.todos;
export const getUser = (state: State) => state.user;
export const getRequestError = (state: State) => state.requestError;
export const getLoading = (state: State) => state.loading;

const rootReducer = combineReducers<State>({
  todos: todosReducer,
  user: userReducer,
  requestError: requestErrorReducer,
  loading: loadingReducer,
});

// The store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
