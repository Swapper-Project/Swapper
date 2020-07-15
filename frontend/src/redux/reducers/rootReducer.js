import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import navReducer from './navReducer';
import postsReducer from './postsReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  nav: navReducer,
  posts: postsReducer,
  user: userReducer
});
