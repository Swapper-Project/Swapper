import { DRAWER_OPEN, DRAWER_CLOSE } from '../actions/types';

const INITIAL_STATE = {
  drawerOpen: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DRAWER_OPEN:
      return { ...state, drawerOpen: true };
    case DRAWER_CLOSE:
      return { ...state, drawerOpen: false };
    default:
      return state;
  }
};
