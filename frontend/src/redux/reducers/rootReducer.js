import { combineReducers } from 'redux';
import authReducer from './authReducer';
import navReducer from './navReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  nav: navReducer
});
