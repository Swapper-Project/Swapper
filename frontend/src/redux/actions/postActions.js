import { CREATE_SWAP } from './types';

export const createSwap = values => async (dispatch, getState) => {
  console.log('Create Swap Action Hit');
  console.log(values);
  // create swap api call here.
  // dispatch an update state for posts in reducer
};
