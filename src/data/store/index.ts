import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import loadingReducer, { Loading } from '../reducers/loadingReducer';
import requestErrorReducer from '../reducers/requestErrorReducer';
import todosReducer, { Todos } from '../reducers/todosReducer';
import userReducer, { User } from '../reducers/userReducer';

export interface State {
  todos: Todos;
  user: User;
  requestError: string | null;
  loading: Loading;
}

// selectors
const createSelector =
  <K extends keyof State>(dataField: K) =>
  (state: State) =>
    state[dataField];

export const getTodos = createSelector('todos');
export const getUser = createSelector('user');
export const getRequestError = createSelector('requestError');
export const getLoading = createSelector('loading');

export const rootReducer = combineReducers<State>({
  todos: todosReducer,
  user: userReducer,
  requestError: requestErrorReducer,
  loading: loadingReducer,
});

// store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
