import { GET_USER_DATA } from '../actions/types';

export const getUserData = values => async (dispatch, getState) => {
  console.log(values);
  let json = JSON.stringify(values.category);
  console.log(json);
};
