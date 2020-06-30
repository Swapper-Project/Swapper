import { SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: false,
  userId: '',
  email: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.userId };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, username: '' };
    default:
      return state;
  }
};
