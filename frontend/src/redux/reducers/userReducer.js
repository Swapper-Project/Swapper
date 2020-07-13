import { GET_USER_DATA } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  interests: '',
  favoriteCategories: [],
  rating: 0,
  completedSwaps: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
