import { GET_USER_DATA, UPDATE_WISHLIST } from '../actions/types';
import axios from 'axios';

export const getUserData = (userId) => async (dispatch, getState) => {
  const url = `http://localhost:4007/api/getUserData`;

  axios
    .post(url, {
      userId: userId,
    })
    .then(function (response) {
      const data = {
        email: response.data.email,
        username: response.data.username,
        interests: response.data.interests,
        favoriteCategories: JSON.parse(response.data.favoriteCategories),
        rating: response.data.rating,
        totalRating: response.data.totalRating,
        completedSwaps: response.data.completedSwaps,
        wishlist: JSON.parse(response.data.wishlist),
      };

      dispatch({ type: GET_USER_DATA, payload: data });
    });
};

export const updateUserData =
  (values, userId) => async (dispatch, getState) => {
    const url = `http://localhost:4007/api/updateUserData`;
    axios
      .post(url, {
        email: values.email,
        interests: values.interests,
        favoriteCategories: JSON.stringify(values.category),
        userId: userId,
      })
      .then(function (response) {
        console.log(response);
      });
  };

export const updateWishlist =
  (wishlist, userId) => async (dispatch, getState) => {
    const url = `http://localhost:4007/api/updateUserWishlist`;
    axios
      .post(url, {
        wishlist: JSON.stringify(wishlist),
        userId: userId,
      })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
