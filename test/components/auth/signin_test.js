import { renderComponent, expect } from '../../test_helper';
import Signin from '../../../src/components/auth/signin';

describe('Signin', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Signin);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('signin');
  });

  it('has inputs', () => {
    expect(component.find('input').length).to.equal(2);
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });
});
