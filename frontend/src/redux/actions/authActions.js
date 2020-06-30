import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = values => async (dispatch) => {
  const email = values.email;
  const password = values.password;
  
  const url = `http://localhost:4001/api/login`;

  const result = await fetch(url, {
      method: "POST",
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          email: email,
          password: password,
      })
  })
  .then(res => res.json())
  .then(data => {
      if(data.valid) {
        dispatch({ type: SIGN_IN, payload: data.userId });
      }
  }).catch(console.log);

};

export const signOut = userId => async (dispatch, getState) => {
  // Put api logic here for sign out
  // dispatch({ type: SIGN_OUT, payload: response });
};

export const register = values => async (dispatch, getState) => {
  const username = values.username;
  const email = values.email;
  const password = values.password;

  const url = `http://localhost:4001/api/register`;

  const result = await fetch(url, {
      method: "POST",
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          email: email,
          username: username,
          password: password,
      })
  })
  .then(res => res.json())
  .then(data => {
      if(data.valid) {
        dispatch({ type: SIGN_IN, userId: data.userId });
      }
  }).catch(console.log);
};