import { AnyAction } from 'redux';
import { StrOrNum } from '../../common/types';

export type User = { [key: string]: StrOrNum };

const SET_USER = 'USER/SET';

export const setUserAction = (user: User | null) => ({
  type: SET_USER,
  payload: user,
});

const userReducer = (state: User | null = null, action: AnyAction) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
