import axios from 'axios';
import { SAVE_CATEGORY,  FETCH_CATEGORIES } from './types';
import { FORUM_ADDRESS } from '../config/addresses';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

export function saveCategory(category) {
  return {
    type: SAVE_CATEGORY,
    payload: category
  }
}

export function fetchCategories() {
  const request = axios.get(`${FORUM_ADDRESS}/category`);
  return {
    type: FETCH_CATEGORIES,
    payload: request
  }
}

export function signin({ username, password }) {
  return (dispatch) => {
    axios.post(`${FORUM_ADDRESS}/signin`, { username, password })
      .then( response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      }).catch(error => {
        dispatch(authError(error.response.data.error))
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
