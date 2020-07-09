import { CREATE_SWAP, SET_TERM, GET_POSTS } from '../actions/types';
import actions from 'redux-form/lib/actions';

const INITIAL_STATE = {
  posts: [],
  term: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_SWAP:
    // update posts state
    case GET_POSTS:
      return { ...state, posts: action.posts };
    case SET_TERM:
      return { ...state, term: action.term };
    default:
      return state;
  }
};
