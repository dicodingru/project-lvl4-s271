import React from 'react';
import renderer from 'react-test-renderer';
import NewMessageForm from './NewMessageForm';

describe('NewMessageForm component', () => {
  let component;
  const messages = ['msg1', 'msg2'];

  beforeEach(() => {
    component = mount(<NewMessageForm />);
  });

  test('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  test('should render input field', () => {
    expect(component.find('input').length).toBe(1);
  });

  test('should render submit button', () => {
    expect(component.find('button').length).toBe(1);
  });

  test('should match snapshot', () => {
    component = renderer.create(<NewMessageForm />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
