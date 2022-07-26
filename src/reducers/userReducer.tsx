import { AnyAction } from 'redux';

export type User = { [key: string]: string | number };

const SET_USER = 'SET/USER';

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
