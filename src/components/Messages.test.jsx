import React from 'react';
import renderer from 'react-test-renderer';
import Messages from './Messages';

describe('Messages component', () => {
  let component;
  const messages = ['msg1', 'msg2'];

  beforeEach(() => {
    component = shallow(<Messages messages={messages} />);
  });

  test('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  test('should render list of two messages', () => {
    expect(component.find('Message').length).toBe(2);
  });

  test('should render new message form', () => {
    expect(component.find('NewMessageForm').length).toBe(1);
  });

  test('should match snapshot', () => {
    component = renderer.create(<Messages messages={messages} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
