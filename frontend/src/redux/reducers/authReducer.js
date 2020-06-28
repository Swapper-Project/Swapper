import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: false,
  username: '',
  email: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, username: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, username: '' };
    default:
      return state;
  }
};
