import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Root from '../src/components/Root';
import rootReducer from '../src/reducers';

const initialState = {
  channels: [
    { id: 1, name: 'general', removable: false },
    { id: 2, name: 'random', removable: false }
  ],
  messages: [
    { id: 1, channelId: 1, username: 'user1', text: 'message1' },
    { id: 2, channelId: 1, username: 'user2', text: 'message2' }
  ],
  username: 'Test User',
  currentChannelId: 1
};
const store = createStore(rootReducer, initialState);

test('App', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Root />
    </Provider>
  );

  expect(wrapper.render()).toMatchSnapshot();
});
