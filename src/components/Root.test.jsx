import React from 'react';
import Root from './Root';

describe('Root component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Root />);
  });

  test('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
});
