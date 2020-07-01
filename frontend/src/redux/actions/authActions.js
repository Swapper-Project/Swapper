import { SIGN_IN, SIGN_OUT, AUTH_MODAL_OPEN, AUTH_MODAL_CLOSE } from './types';
import auth from '../../auth';

export const signIn = values => async dispatch => {
  const email = values.email;
  const password = values.password;

  const url = `http://localhost:4001/api/login`;

  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.valid) {
        console.log('USERID: ' + data.userId);
        dispatch({ type: SIGN_IN, userId: data.userId });
        localStorage.setItem('userId', data.userId);
      }
    })
    .catch(console.log);
};

export const signOut = () => async dispatch => {
  console.log('SIGN OUT HIT');
  dispatch({ type: SIGN_OUT });
};

export const register = values => async (dispatch, getState) => {
  const username = values.username;
  const email = values.email;
  const password = values.password;

  const url = `http://localhost:4001/api/register`;

  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      username: username,
      password: password
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.valid) {
        dispatch({ type: SIGN_IN, userId: data.userId });
        localStorage.setItem('userId', data.userId);
        console.log(localStorage.getItem('userId'));
      }
    })
    .catch(console.log);
};

export const authModalOpen = () => dispatch => {
  dispatch({ type: AUTH_MODAL_OPEN });
};

export const authModalClose = () => dispatch => {
  dispatch({ type: AUTH_MODAL_CLOSE });
};
