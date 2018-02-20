import axios from 'axios';
import { SAVE_CATEGORY,  FETCH_CATEGORIES } from './types';
import { FORUM_ADDRESS } from '../config/addresses';

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
