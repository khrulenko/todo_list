import { createStore, AnyAction, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Action types - is just a constant. MUST have a unique value.
const START_LOADING = 'START_LOADING';
const FINISH_LOADING = 'FINISH_LOADING';
const SAVE_TODOS = 'SAVE_TODOS';

// Action creators - a function returning an action object
export const startLoadingAction = () => ({ type: START_LOADING });
export const finishLoadingAction = (message = 'No message') => ({
  type: FINISH_LOADING,
  message,
});
export const saveTodosAction = (todos: []) => ({
  type: SAVE_TODOS,
  payload: todos,
});

// Selectors - a function receiving Redux state and returning some data from it
export const isLoading = (state: RootState) => state.loading;
export const getMessage = (state: RootState) => state.message;
export const getTodos = (state: RootState) => state.todos;

// Initial state
export type RootState = {
  loading: boolean;
  message: string;
  todos: [];
};

const initialState: RootState = {
  loading: false,
  message: '',
  todos: [],
};

// rootReducer - this function is called after dispatching an action
const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };

    case SAVE_TODOS:
      return { ...state, todos: action.payload };

    case FINISH_LOADING:
      return {
        ...state,
        loading: false,
        message: action.message,
      };

    default:
      return state;
  }
};

// The `store` should be passed to the <Provider store={store}> in `/src/index.tsx`
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)), // allows you to use http://extension.remotedev.io/
);

export default store;
