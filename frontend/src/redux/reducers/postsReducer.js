import { CREATE_SWAP } from '../actions/types';

const INITIAL_STATE = {
  post: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_SWAP:
    // update posts state
    default:
      return state;
  }
};
