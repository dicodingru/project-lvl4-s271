import React from 'react';
import renderer from 'react-test-renderer';
import ChannelsList from '../src/components/ChannelsList';

describe('ChannelsList component', () => {
  let component;
  const channels = [
    { id: 1, name: 'general', removable: false },
    { id: 2, name: 'random', removable: false }
  ];

  beforeEach(() => {
    component = shallow(<ChannelsList channels={channels} />);
  });

  test('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  test('should render two items', () => {
    expect(component.find('ChannelLink').length).toBe(2);
  });

  test('should match snapshot', () => {
    component = renderer.create(<ChannelsList channels={channels} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
