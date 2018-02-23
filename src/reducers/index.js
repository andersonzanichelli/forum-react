import { combineReducers } from 'redux';
import categories from './category';
import { reducer as form } from 'redux-form';
import auth from './auth';

const rootReducer = combineReducers({
  categories,
  form,
  auth
});

export default rootReducer;
