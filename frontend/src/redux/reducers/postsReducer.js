import {
  CREATE_SWAP,
  SET_TERM,
  GET_POSTS,
  SET_CATEGORY,
  SET_POST
} from '../actions/types';
import actions from 'redux-form/lib/actions';

const INITIAL_STATE = {
  posts: [],
  term: '',
  category: 'All',
  currentPost: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_SWAP:
    // update posts state
    case GET_POSTS:
      return { ...state, posts: action.posts };
    case SET_POST:
      return { ...state, currentPost: action.post };
    case SET_TERM:
      return { ...state, term: action.term };
    case SET_CATEGORY:
      return { ...state, category: action.category };
    default:
      return state;
  }
};
