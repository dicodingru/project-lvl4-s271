import React from 'react';
import renderer from 'react-test-renderer';
import Message from '../src/components/Message';

describe('Message component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Message text="message text" />);
  });

  test('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  test('should match snapshot', () => {
    component = renderer.create(<Message text="message text" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
