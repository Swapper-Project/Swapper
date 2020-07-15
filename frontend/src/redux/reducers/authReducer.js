import {
  SIGN_IN,
  SIGN_OUT,
  AUTH_MODAL_OPEN,
  AUTH_MODAL_CLOSE,
  LOAD_COOKIE
} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: false,
  userId: '',
  authOpen: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.userId,
        authOpen: false
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: '' };
    case AUTH_MODAL_OPEN:
      return { ...state, authOpen: true };
    case AUTH_MODAL_CLOSE:
      return { ...state, authOpen: false };
    case LOAD_COOKIE:
      return { ...state, userId: action.userId, isSignedIn: true };
    default:
      return state;
  }
};
