import { SIGN_IN, SIGN_OUT, REGISTER } from './types';

export const signIn = values => async (dispatch, getState) => {
  const email = values.email;
  const password = values.password;
  console.log('EMAIL: ' + email);
  console.log('PASSWORD ' + password);
  // Put api logic here for sign in
  // dispatch({ type: SIGN_IN, payload: response });
};

export const signOut = userId => async (dispatch, getState) => {
  // Put api logic here for sign out
  // dispatch({ type: SIGN_OUT, payload: response });
};

export const register = values => async (dispatch, getState) => {
  const username = values.username;
  const email = values.email;
  const password = values.password;
  // Register logic here
};
