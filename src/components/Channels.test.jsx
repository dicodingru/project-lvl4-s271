import React from 'react';
import Channels from './Channels';

describe('Channels component', () => {
  let component;
  const channels = [
    { id: 1, name: 'general', removable: false },
    { id: 2, name: 'random', removable: false }
  ];

  beforeEach(() => {
    component = shallow(<Channels channels={channels} />);
  });

  test('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
});
