import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions';

const channels = handleActions(
  {
    [actions.addChannel](state, { payload: channel }) {
      return [...state, channel];
    },
    [actions.deleteChannel](
      state,
      {
        payload: { id }
      }
    ) {
      return state.filter((channel) => channel.id !== id);
    },
    [actions.updateChannel](state, { payload: channel }) {
      const index = _.findIndex(state, ({ id }) => id === channel.id);
      return state.map((c, i) => (i === index ? channel : c));
    }
  },
  []
);

const messages = handleActions(
  {
    [actions.addMessage](state, { payload: message }) {
      return [...state, message];
    },
    [actions.deleteChannel](
      state,
      {
        payload: { id }
      }
    ) {
      return state.filter(({ channelId }) => channelId !== id);
    }
  },
  []
);

const currentChannelId = handleActions(
  {
    [actions.addChannel](state, { payload: channel }) {
      return channel.id;
    },
    [actions.changeCurrentChannel](
      state,
      {
        payload: { id }
      }
    ) {
      return id;
    },
    [actions.deleteChannel](
      state,
      {
        payload: { id }
      }
    ) {
      return state === id ? 1 : state;
    }
  },
  null
);

const messageSendingState = handleActions(
  {
    [actions.sendMessageNone]() {
      return 'none';
    },
    [actions.sendMessageRequest]() {
      return 'requested';
    },
    [actions.sendMessageSuccess]() {
      return 'successed';
    },
    [actions.sendMessageFailure]() {
      return 'failed';
    }
  },
  'none'
);

const channelCreatingState = handleActions(
  {
    [actions.createChannelNone]() {
      return 'none';
    },
    [actions.createChannelRequest]() {
      return 'requested';
    },
    [actions.createChannelSuccess]() {
      return 'successed';
    },
    [actions.createChannelFailure]() {
      return 'failed';
    }
  },
  'none'
);

const channelRemovingState = handleActions(
  {
    [actions.removeChannelNone]() {
      return 'none';
    },
    [actions.removeChannelRequest]() {
      return 'requested';
    },
    [actions.removeChannelSuccess]() {
      return 'successed';
    },
    [actions.removeChannelFailure]() {
      return 'failed';
    }
  },
  'none'
);

const channelRenamingState = handleActions(
  {
    [actions.renameChannelNone]() {
      return 'none';
    },
    [actions.renameChannelRequest]() {
      return 'requested';
    },
    [actions.renameChannelSuccess]() {
      return 'successed';
    },
    [actions.renameChannelFailure]() {
      return 'failed';
    }
  },
  'none'
);

const rootReducer = combineReducers({
  channels,
  messages,
  currentChannelId,
  messageSendingState,
  channelCreatingState,
  channelRemovingState,
  channelRenamingState,
  form: formReducer
});

export default rootReducer;
