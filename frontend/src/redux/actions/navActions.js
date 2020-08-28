import { DRAWER_OPEN, DRAWER_CLOSE, SET_DASHBOARD_TAB } from './types';

export const handleDrawerOpen = () => dispatch => {
  dispatch({ type: DRAWER_OPEN });
};

export const handleDrawerClose = () => dispatch => {
  dispatch({ type: DRAWER_CLOSE });
};

export const setDashboardTab = value => dispatch => {
  dispatch({ type: SET_DASHBOARD_TAB, payload: value });
};
