import { combineReducers } from 'redux';
import categoryReducer from './category';

const rootReducer = combineReducers({
  categories: categoryReducer
});

export default rootReducer;
