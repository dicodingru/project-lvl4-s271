import { createStore } from 'redux';
import rootReducer from '../src/reducers';
import * as actions from '../src/actions';

const buildChannel = (id, name) => ({
  channel: {
    id,
    name,
    removable: true
  }
});

const buildMessage = (id, channelId, username) => ({
  id,
  channelId,
  username,
  text: Math.random()
});

const initialState = {
  channels: {
    byId: {
      1: { id: 1, name: 'general', removable: false },
      2: { id: 2, name: 'random', removable: false },
      3: { id: 3, name: 'qa', removable: true }
    },
    allIds: [1, 2, 3]
  },
  messages: [],
  currentChannelId: 1,
  form: {},
  networkErrorState: 'none'
};

describe('Store', () => {
  let store;

  beforeEach(() => {
    store = createStore(rootReducer, initialState);
  });

  test('should match initial state', () => {
    expect(store.getState()).toEqual({
      channels: {
        byId: {
          1: { id: 1, name: 'general', removable: false },
          2: { id: 2, name: 'random', removable: false },
          3: { id: 3, name: 'qa', removable: true }
        },
        allIds: [1, 2, 3]
      },
      messages: [],
      currentChannelId: 1,
      form: {},
      networkErrorState: 'none'
    });
  });

  test('should add channel', () => {
    const channel = buildChannel(4, 'test');
    store.dispatch(actions.addChannel(channel));
    expect(store.getState().channels).toEqual({
      byId: {
        1: { id: 1, name: 'general', removable: false },
        2: { id: 2, name: 'random', removable: false },
        3: { id: 3, name: 'qa', removable: true },
        4: { id: 4, name: 'test', removable: true }
      },
      allIds: [1, 2, 3, 4]
    });
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
    expect(store.getState().channels).toEqual({
      byId: {
        1: { id: 1, name: 'general', removable: false },
        2: { id: 2, name: 'random', removable: false }
      },
      allIds: [1, 2]
    });
  });

  test('should update channel', () => {
    const channel = buildChannel(3, 'new');
    store.dispatch(actions.updateChannel(channel));
    expect(store.getState().channels).toEqual({
      byId: {
        1: { id: 1, name: 'general', removable: false },
        2: { id: 2, name: 'random', removable: false },
        3: { id: 3, name: 'new', removable: true }
      },
      allIds: [1, 2, 3]
    });
  });

  test('should change network error states', () => {
    store.dispatch(actions.setNetworkErrorState());
    expect(store.getState().networkErrorState).toEqual('failed');

    store.dispatch(actions.clearNetworkErrorState());
    expect(store.getState().networkErrorState).toEqual('none');
  });
});
