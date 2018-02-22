import { renderComponent, expect } from '../test_helper';
import CategoryAdder from '../../src/components/category_adder';

describe('CategoryAdder', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(CategoryAdder);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('category-adder');
  });

  it('has an input', () => {
    expect(component.find('input')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('input').simulate('change', 'new category');
    });

    it('shows text that is entered', () => {
      expect(component.find('input')).to.have.value('new category');
    });

    it('when added, clears the input', () => {
      component.simulate('submit');
      expect(component.find('input')).to.have.value('');
    });
  });
});
