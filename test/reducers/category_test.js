import { expect } from '../test_helper';
import categoryReducer from '../../src/reducers/category';
import { SAVE_CATEGORY } from '../../src/actions/types';

describe('Category Reducer', () => {
  it('handles action with unknown type', () => {
    expect(categoryReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_CATEGORY', () => {
    let payload = {data : 'New Category'};
    const action = { type: SAVE_CATEGORY, payload };
    expect(categoryReducer([], action)).to.eql(['New Category']);
  });
});
