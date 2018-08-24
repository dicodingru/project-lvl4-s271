import { createStore } from 'redux';
import reducers from '../src/reducers';
import * as actions from '../src/actions';

const buildChannel = (id, name) => ({
  id,
  name,
  removable: true
});

const buildMessage = (id, channelId, username) => ({
  id,
  channelId,
  username,
  text: Math.random()
});

const initialState = {
  channels: [
    { id: 1, name: 'general', removable: false },
    { id: 2, name: 'random', removable: false }
  ],
  messages: [],
  currentChannelId: 1
};

test('Store', () => {
  const store = createStore(reducers, initialState);
  expect(store.getState()).toEqual({
    channels: [
      { id: 1, name: 'general', removable: false },
      { id: 2, name: 'random', removable: false }
    ],
    messages: [],
    currentChannelId: 1,
    form: {},
    messageSendingState: 'none',
    channelCreatingState: 'none',
    channelRemovingState: 'none'
  });

  const channel1 = buildChannel(3, 'test');
  store.dispatch(actions.addChannel(channel1));
  expect(store.getState()).toEqual({
    channels: [
      { id: 1, name: 'general', removable: false },
      { id: 2, name: 'random', removable: false },
      { id: 3, name: 'test', removable: true }
    ],
    messages: [],
    currentChannelId: 1,
    form: {},
    messageSendingState: 'none',
    channelCreatingState: 'none',
    channelRemovingState: 'none'
  });

  store.dispatch(actions.changeCurrentChannel({ id: 3 }));
  expect(store.getState()).toEqual({
    channels: [
      { id: 1, name: 'general', removable: false },
      { id: 2, name: 'random', removable: false },
      { id: 3, name: 'test', removable: true }
    ],
    messages: [],
    currentChannelId: 3,
    form: {},
    messageSendingState: 'none',
    channelCreatingState: 'none',
    channelRemovingState: 'none'
  });

  const message1 = buildMessage(1, 3, 'user1');
  store.dispatch(actions.addMessage(message1));
  expect(store.getState()).toEqual({
    channels: [
      { id: 1, name: 'general', removable: false },
      { id: 2, name: 'random', removable: false },
      { id: 3, name: 'test', removable: true }
    ],
    messages: [message1],
    currentChannelId: 3,
    form: {},
    messageSendingState: 'none',
    channelCreatingState: 'none',
    channelRemovingState: 'none'
  });

  const message2 = buildMessage(2, 3, 'user2');
  store.dispatch(actions.addMessage(message2));
  expect(store.getState()).toEqual({
    channels: [
      { id: 1, name: 'general', removable: false },
      { id: 2, name: 'random', removable: false },
      { id: 3, name: 'test', removable: true }
    ],
    messages: [message1, message2],
    currentChannelId: 3,
    form: {},
    messageSendingState: 'none',
    channelCreatingState: 'none',
    channelRemovingState: 'none'
  });

  store.dispatch(actions.deleteChannel({ id: 3 }));
  expect(store.getState()).toEqual({
    channels: [
      { id: 1, name: 'general', removable: false },
      { id: 2, name: 'random', removable: false }
    ],
    messages: [],
    currentChannelId: null,
    form: {},
    messageSendingState: 'none',
    channelCreatingState: 'none',
    channelRemovingState: 'none'
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

  store.dispatch(actions.removeChannelRequest());
  expect(store.getState().channelRemovingState).toEqual('requested');

  store.dispatch(actions.removeChannelSuccess());
  expect(store.getState().channelRemovingState).toEqual('successed');

  store.dispatch(actions.removeChannelFailure());
  expect(store.getState().channelRemovingState).toEqual('failed');

  store.dispatch(actions.removeChannelNone());
  expect(store.getState().channelRemovingState).toEqual('none');
});
