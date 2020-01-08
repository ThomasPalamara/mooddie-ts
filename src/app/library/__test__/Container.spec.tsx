import React from 'react';
import { shallow } from 'enzyme';
import { merge } from 'lodash';

import Container from '../Container';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const wrapper = shallow(<Container {...props} />);

  return { wrapper, props };
};
describe('Container', () => {
  it('should match Snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
