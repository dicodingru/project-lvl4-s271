import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from '../src/reducers';
import App from '../src/components/App';

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
