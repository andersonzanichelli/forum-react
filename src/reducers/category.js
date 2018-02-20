import { SAVE_CATEGORY } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_CATEGORY:
      return [ ...state, action.payload.data ];
  }

  return state;
}
