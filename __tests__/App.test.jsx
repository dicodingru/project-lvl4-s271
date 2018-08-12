import React from 'react';
import io from 'socket.io-client';
import App from '../src/components/App';

test('App', () => {
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
  const socket = io();

  const wrapper = mount(<App initialState={initialState} socket={socket} />);

  expect(wrapper.render()).toMatchSnapshot();
});
