import { createStore } from 'redux';
import reducers from '../src/reducers';
import * as actions from '../src/actions';

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
    form: {},
    messageSendingState: 'none',
    channelCreatingState: 'none'
  });

  const channel1 = buildChannel(1, 'general');
  store.dispatch(actions.addChannel(channel1));
  expect(store.getState()).toEqual({
    channels: [{ id: 1, name: 'general', removable: false }],
    messages: [],
    currentChannelId: 1,
    form: {},
    messageSendingState: 'none',
    channelCreatingState: 'none'
  });

  const message1 = buildMessage(1, 1, 'user1');
  store.dispatch(actions.addMessage(message1));
  expect(store.getState()).toEqual({
    channels: [{ id: 1, name: 'general', removable: false }],
    messages: [message1],
    currentChannelId: 1,
    form: {},
    messageSendingState: 'none',
    channelCreatingState: 'none'
  });

  const message2 = buildMessage(2, 1, 'user2');
  store.dispatch(actions.addMessage(message2));
  expect(store.getState()).toEqual({
    channels: [{ id: 1, name: 'general', removable: false }],
    messages: [message1, message2],
    currentChannelId: 1,
    form: {},
    messageSendingState: 'none',
    channelCreatingState: 'none'
  });

  store.dispatch(actions.sendMessageRequest());
  expect(store.getState().messageSendingState).toEqual('requested');

  store.dispatch(actions.sendMessageSuccess());
  expect(store.getState().messageSendingState).toEqual('successed');

  store.dispatch(actions.sendMessageFailure());
  expect(store.getState().messageSendingState).toEqual('failed');

  store.dispatch(actions.sendMessageNone());
  expect(store.getState().messageSendingState).toEqual('none');

  store.dispatch(actions.changeCurrentChannel({ id: 2 }));
  expect(store.getState().currentChannelId).toEqual(2);

  store.dispatch(actions.createChannelRequest());
  expect(store.getState().channelCreatingState).toEqual('requested');

  store.dispatch(actions.createChannelSuccess());
  expect(store.getState().channelCreatingState).toEqual('successed');

  store.dispatch(actions.createChannelFailure());
  expect(store.getState().channelCreatingState).toEqual('failed');

  store.dispatch(actions.createChannelNone());
  expect(store.getState().channelCreatingState).toEqual('none');
});
