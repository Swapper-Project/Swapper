import { GET_USER_DATA, UPDATE_WISHLIST } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  username: '',
  interests: '',
  favoriteCategories: [],
  rating: 0,
  totalRating: 0,
  completedSwaps: 0,
  wishlist: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        interests: action.payload.interests,
        favoriteCategories: action.payload.favoriteCategories,
        rating: action.payload.rating,
        totalRating: action.payload.totalRating,
        completedSwaps: action.payload.completedSwaps,
        wishlist: action.payload.wishlist,
      };
    case UPDATE_WISHLIST:
      return {
        ...state,
        wishlist: action.payload.wishlist,
      };
    default:
      return state;
  }
};
