import { AnyAction } from 'redux';

export type requestError = string | null;

const SET_REQUEST_ERROR = 'REQUEST_ERROR/SET';

export const setRequestError = (requestError: requestError) => ({
  type: SET_REQUEST_ERROR,
  payload: requestError,
});

const requestErrorReducer = (state: requestError = null, action: AnyAction) => {
  switch (action.type) {
    case SET_REQUEST_ERROR:
      return action.payload;

    default:
      return state;
  }
};

export default requestErrorReducer;
