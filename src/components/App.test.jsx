import React from 'react';
import App from './App';

test('App', () => {
  const wrapper = mount(
    <App
      initialState={{
        channels: [
          { id: 1, name: 'general', removable: false },
          { id: 2, name: 'random', removable: false }
        ]
      }}
    />
  );

  expect(wrapper.render()).toMatchSnapshot();
});
