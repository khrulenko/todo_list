import { AnyAction } from 'redux';
import { StrOrNum } from '../../common/types';

export type Loading = {
  isLoadingUser: boolean;
  isLoadingTodos: boolean;
  endPoint: StrOrNum;
};

const START_LOADING_USER = 'USER/LOADING/START';
const END_LOADING_USER = 'USER/LOADING/END';
const START_LOADING_TODOS = 'TODOS/LOADING/START';
const END_LOADING_TODOS = 'TOODS/LOADING/END';

export const startLoadingUser = (endPoint: StrOrNum = '') => ({
  type: START_LOADING_USER,
  payload: { isLoadingUser: true, endPoint },
});

export const endLoadingUser = () => ({
  type: END_LOADING_USER,
});

export const startLoadingTodos = () => ({
  type: START_LOADING_TODOS,
});

export const endLoadingTodos = () => ({
  type: END_LOADING_TODOS,
});

const initialState = {
  isLoadingUser: false,
  isLoadingTodos: false,
  endPoint: '',
};

const loadingReducer = (state: Loading = initialState, action: AnyAction) => {
  const { payload } = action;

  switch (action.type) {
    case START_LOADING_USER:
      return { ...state, ...payload };

    case END_LOADING_USER:
      return { ...state, isLoadingUser: false, endPoint: null };

    case START_LOADING_TODOS:
      return { ...state, isLoadingTodos: true };

    case END_LOADING_TODOS:
      return { ...state, isLoadingTodos: false };

    default:
      return state;
  }
};

export default loadingReducer;
