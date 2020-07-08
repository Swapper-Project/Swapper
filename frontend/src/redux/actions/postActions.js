import { CREATE_SWAP } from './types';
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
  }).then(res => console.log(res)).catch(err => console.log(err));
};
