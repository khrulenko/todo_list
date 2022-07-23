import { AnyAction } from 'redux';

export type User = {
  id?: string | number;
  name: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
} | null;

const SET_USER = 'SET/USER';

export const setUserAction = (user: User) => ({
  type: SET_USER,
  payload: user,
});

const userReducer = (state: User = null, action: AnyAction) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
