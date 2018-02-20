import { renderComponent, expect } from '../test_helper';
import CategoryList from '../../src/components/category_list';

describe('CategoryList', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(CategoryList, null, { categories: ['New Category', 'Other Category']});
  });

  it('has the correct class', () => {
    expect(component.find('select')).to.have.class('category-list');
  });

  it('has an option for each category', () => {
    expect(component.find('option').length).to.equal(2);
  });

  it('shows each category that is provided', () => {
    expect(component.find('select')).to.contain('New Category');
    expect(component.find('select')).to.contain('Other Category');
  });
});
