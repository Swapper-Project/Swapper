import { SET_POST, SET_TERM, GET_POSTS, SET_CATEGORY } from './types';
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

  axios.post(url, formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const getPosts = () => (dispatch, getState) => {
  axios.get(`http://localhost:4006/api/searchByTerm?term=${getState().posts.term}&category=${getState().posts.category}`)
    .then(res => {
      dispatch({ type: GET_POSTS, posts: res.data.results });
    })
    .catch(err => console.log(err));
};

export const setCurrentPost = values => async (dispatch, getState) => { 
  axios.get('http://localhost:4002/api/getPost', {
    params: {postId: values}
  })
  .then(res => {
    if(res.data.valid) {
      return dispatch({ type: SET_POST, post: res.data.result[0] });
    }
    console.log(res.data.err);
  })
  .catch(err => console.log(err));
};

export const setTerm = values => async (dispatch, getState) => {
  dispatch({ type: SET_TERM, term: values });
};

export const setCategory = value => dispatch => {
  dispatch({ type: SET_CATEGORY, category: value });
};