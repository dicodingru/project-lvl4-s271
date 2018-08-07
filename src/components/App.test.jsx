import React from 'react';
import App from './App';

test('App', () => {
  const wrapper = mount(
    <App
      initialState={{
        channels: [
          { id: 1, name: 'general', removable: false },
          { id: 2, name: 'random', removable: false }
        ],
        messages: ['msg1', 'msg2']
      }}
    />
  );

  expect(wrapper.render()).toMatchSnapshot();
});
