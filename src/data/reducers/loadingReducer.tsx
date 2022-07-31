import { AnyAction } from 'redux';
import { StrOrNum } from '../../common/types';

export type Loading = {
  requesting: boolean;
  endPoint: StrOrNum;
};

const START_LOADING = 'LOADING/START';
const END_LOADING = 'LOADING/END';

export const startLoading = (endPoint: StrOrNum = '') => ({
  type: START_LOADING,
  payload: { requesting: true, endPoint },
});

export const endLoading = () => ({
  type: END_LOADING,
  payload: { requesting: false, endPoint: null },
});

const initialState = { requesting: false, endPoint: '' };

const loadingReducer = (state: Loading = initialState, action: AnyAction) => {
  switch (action.type) {
    case START_LOADING:
      return { ...action.payload };

    case END_LOADING:
      return { ...action.payload };

    default:
      return state;
  }
};

export default loadingReducer;
