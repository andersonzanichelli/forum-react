import { expect } from '../test_helper';
import { SAVE_CATEGORY } from '../../src/actions/types';
import { saveCategory } from '../../src/actions';

describe('Actions', () => {

  describe('saveCategory', () => {
    it('has the correct type', () => {
      const action = saveCategory();
      expect(action.type).to.equal(SAVE_CATEGORY);
    });

    it('has the correct payload', () => {
      const action = saveCategory('New Category');
      expect(action.payload).to.equal('New Category');
    });
  });
});
