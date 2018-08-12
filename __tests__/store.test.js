import { createStore } from 'redux';
import reducers from '../src/reducers';
import { addChannel, addMessage } from '../src/actions';

const buildChannel = (id, name) => ({
  id,
  name,
  removable: false
});

const buildMessage = (id, channelId, username) => ({
  id,
  channelId,
  username,
  text: Math.random()
});

test('Store', () => {
  const store = createStore(reducers);
  expect(store.getState()).toEqual({
    channels: [],
    messages: [],
    currentChannelId: null,
    username: null
  });

  const channel1 = buildChannel(1, 'general');
  store.dispatch(addChannel(channel1));
  expect(store.getState()).toEqual({
    channels: [{ id: 1, name: 'general', removable: false }],
    messages: [],
    currentChannelId: 1,
    username: null
  });

  const message1 = buildMessage(1, 1, 'user1');
  store.dispatch(addMessage(message1));
  expect(store.getState()).toEqual({
    channels: [{ id: 1, name: 'general', removable: false }],
    messages: [message1],
    currentChannelId: 1,
    username: null
  });

  const message2 = buildMessage(2, 1, 'user2');
  store.dispatch(addMessage(message2));
  expect(store.getState()).toEqual({
    channels: [{ id: 1, name: 'general', removable: false }],
    messages: [message1, message2],
    currentChannelId: 1,
    username: null
  });
});
