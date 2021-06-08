import { DRAWER_OPEN, DRAWER_CLOSE, SET_DASHBOARD_TAB } from '../actions/types';

const INITIAL_STATE = {
  drawerOpen: false,
  selectedTab: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DRAWER_OPEN:
      return { ...state, drawerOpen: true };
    case DRAWER_CLOSE:
      return { ...state, drawerOpen: false };
    case SET_DASHBOARD_TAB:
      return { ...state, selectedTab: action.payload };
    default:
      return state;
  }
};
