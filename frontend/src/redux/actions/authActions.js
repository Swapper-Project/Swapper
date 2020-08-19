import {
  SIGN_IN,
  SIGN_OUT,
  AUTH_MODAL_OPEN,
  AUTH_MODAL_CLOSE,
  LOAD_COOKIE,
  SET_TAB
} from './types';
import cookie from 'react-cookies';
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
        cookie.save('userId', data.userId, { path: '/' });
        dispatch({ type: SIGN_IN, userId: data.userId });
      }
    })
    .catch(console.log);
};

export const signOut = () => async dispatch => {
  cookie.remove('userId', { path: '/' });
  dispatch({ type: SIGN_OUT });
  auth.logout(() => {});
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
      }
    })
    .catch(console.log);
};

export const loadCookie = () => dispatch => {
  if (cookie.load('userId')) {
    dispatch({ type: LOAD_COOKIE, userId: cookie.load('userId') });
    auth.login(() => {});
  }
};

export const authModalOpen = (choice) => dispatch => {
  dispatch({ type: AUTH_MODAL_OPEN });
  dispatch({ type: SET_TAB, selectedTab: choice });
};

export const authModalClose = () => dispatch => {
  dispatch({ type: AUTH_MODAL_CLOSE });
};
