import React from 'react';
import renderer from 'react-test-renderer';
import ChannelLink from '../src/components/ChannelLink';

describe('ChannelLink component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ChannelLink name="general" />);
  });

  test('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  test('should match snapshot', () => {
    component = renderer.create(<ChannelLink name="general" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
