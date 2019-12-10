import React from 'react';
import { shallow } from 'enzyme';
import { merge } from 'lodash';

import TextField from '../TextField';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const wrapper = shallow(<TextField {...props} />);

  return { wrapper, props };
};
describe('TextField', () => {
  it('should match Snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Label', () => {
  it('should only add a label if label props is passed', () => {
    const { wrapper } = setup({ label: 'Email' });
    expect(wrapper.exists('label')).toBe(true);
    expect(wrapper.find('label').text()).toMatch('Email');
  });
  it('should add custom classes', () => {
    const { wrapper } = setup({ label: 'Name', labelClassName: 'text-red' });
    expect(wrapper.find('label').hasClass('text-red')).toBe(true);
  });
});

describe('Wrapper', () => {
  it('should not render if noWrapper is true', () => {
    const { wrapper } = setup({ noWrapper: true });
    console.log(wrapper.debug());
    expect(
      wrapper
        .find('Wrapper')
        .dive()
        .exists('.text-field-wrapper'),
    ).toBe(false);
  });
  it('should add custom classes', () => {
    const { wrapper } = setup({ wrapperClassName: 'bg-white' });
    expect(
      wrapper
        .find('Wrapper')
        .dive()
        .find('.text-field-wrapper')
        .hasClass('bg-white'),
    ).toBe(true);
  });
});
