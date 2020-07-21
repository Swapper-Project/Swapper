import {
  CREATE_SWAP,
  SET_TERM,
  GET_POSTS,
  GET_USER_POSTS,
  SET_CATEGORY,
  SET_POST,
  RESET_CURRENT_POST
} from '../actions/types';
import actions from 'redux-form/lib/actions';

const INITIAL_STATE = {
  posts: [],
  userPosts: [],
  term: '',
  category: 'All',
  currentPost: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_SWAP:
    // update posts state
    case GET_POSTS:
      return { ...state, posts: action.posts };
    case GET_USER_POSTS:
      return { ...state, userPosts: action.payload };
    case SET_POST:
      return { ...state, currentPost: action.post };
    case SET_TERM:
      return { ...state, term: action.term };
    case SET_CATEGORY:
      return { ...state, category: action.category };
    case RESET_CURRENT_POST:
      return { ...state, currentPost: {} };
    default:
      return state;
  }
};
