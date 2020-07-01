import { DRAWER_OPEN, DRAWER_CLOSE } from './types';

export const handleDrawerOpen = () => dispatch => {
  dispatch({ type: DRAWER_OPEN });
};

export const handleDrawerClose = () => dispatch => {
  dispatch({ type: DRAWER_CLOSE });
};
