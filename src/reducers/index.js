import { combineReducers } from 'redux';
import categories from './category';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  categories,
  form
});

export default rootReducer;
