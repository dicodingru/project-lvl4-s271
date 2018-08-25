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
    { id: 2, name: 'random', removable: false },
    { id: 3, name: 'qa', removable: true }
  ],
  messages: [],
  currentChannelId: 1,
  form: {},
  messageSendingState: 'none',
  channelCreatingState: 'none',
  channelRemovingState: 'none',
  channelRenamingState: 'none'
};

describe('Store', () => {
  let store;

  beforeEach(() => {
    store = createStore(reducers, initialState);
  });

  test('should match initial state', () => {
    expect(store.getState()).toEqual({
      channels: [
        { id: 1, name: 'general', removable: false },
        { id: 2, name: 'random', removable: false },
        { id: 3, name: 'qa', removable: true }
      ],
      messages: [],
      currentChannelId: 1,
      form: {},
      messageSendingState: 'none',
      channelCreatingState: 'none',
      channelRemovingState: 'none',
      channelRenamingState: 'none'
    });
  });

  test('should add channel', () => {
    const channel1 = buildChannel(4, 'test');
    store.dispatch(actions.addChannel(channel1));
    expect(store.getState().channels).toEqual([
      { id: 1, name: 'general', removable: false },
      { id: 2, name: 'random', removable: false },
      { id: 3, name: 'qa', removable: true },
      { id: 4, name: 'test', removable: true }
    ]);
  });

  test('should change current channel', () => {
    store.dispatch(actions.changeCurrentChannel({ id: 3 }));
    expect(store.getState().currentChannelId).toEqual(3);
  });

  test('should add messages', () => {
    const message1 = buildMessage(1, 3, 'user1');
    const message2 = buildMessage(2, 3, 'user2');
    store.dispatch(actions.addMessage(message1));
    store.dispatch(actions.addMessage(message2));
    expect(store.getState().messages).toEqual([message1, message2]);
  });

  test('should delete channel', () => {
    store.dispatch(actions.deleteChannel({ id: 3 }));
    expect(store.getState().channels).toEqual([
      { id: 1, name: 'general', removable: false },
      { id: 2, name: 'random', removable: false }
    ]);
  });

  test('should update channel', () => {
    store.dispatch(actions.updateChannel({ id: 3, name: 'new', removable: true }));
    expect(store.getState().channels).toEqual([
      { id: 1, name: 'general', removable: false },
      { id: 2, name: 'random', removable: false },
      { id: 3, name: 'new', removable: true }
    ]);
  });

  test('should change request states', () => {
    store.dispatch(actions.sendMessageRequest());
    expect(store.getState().messageSendingState).toEqual('requested');

    store.dispatch(actions.sendMessageSuccess());
    expect(store.getState().messageSendingState).toEqual('successed');

    store.dispatch(actions.sendMessageFailure());
    expect(store.getState().messageSendingState).toEqual('failed');

    store.dispatch(actions.sendMessageNone());
    expect(store.getState().messageSendingState).toEqual('none');

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

    store.dispatch(actions.renameChannelRequest());
    expect(store.getState().channelRenamingState).toEqual('requested');

    store.dispatch(actions.renameChannelSuccess());
    expect(store.getState().channelRenamingState).toEqual('successed');

    store.dispatch(actions.renameChannelFailure());
    expect(store.getState().channelRenamingState).toEqual('failed');

    store.dispatch(actions.renameChannelNone());
    expect(store.getState().channelRenamingState).toEqual('none');
  });
});
