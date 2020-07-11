import { CREATE_SWAP, SET_TERM, GET_POSTS, SET_CATEGORY } from './types';
import axios from 'axios';

export const createSwap = values => async (dispatch, getState) => {
  console.log('Create swap action input values: ' + values.title);
  const url = `http://localhost:4002/api/post`;

  let formData = new FormData();
  formData.append('file', values.dropzone[0]);
  formData.append('userId', getState().auth.userId);
  formData.append('title', values.title);
  formData.append('description', values.description);
  formData.append('category', values.category);

  axios
    .post(url, formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const getPosts = () => (dispatch, getState) => {
  if (getState().posts.term === '') {
    axios
      .get(`http://localhost:4006/api/getAllposts`)
      .then(res => {
        console.log(res.data);
        dispatch({ type: GET_POSTS, posts: res.data.results });
      })
      .catch(err => console.log(err));
  } else {
    axios
      .get(
        `http://localhost:4006/api/searchByTerm?term=${getState().posts.term}`
      )
      .then(res => {
        dispatch({ type: GET_POSTS, posts: res.data.results });
      })
      .catch(err => console.log(err));
  }
  console.log(getState().posts);
};

export const setTerm = values => async (dispatch, getState) => {
  dispatch({ type: SET_TERM, term: values });
  console.log(values);
};

export const setCategory = value => dispatch => {
  console.log(value);
  dispatch({ type: SET_CATEGORY, category: value });
};
