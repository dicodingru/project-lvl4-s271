import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channels = handleActions(
  {
    [actions.addChannel](state, { payload: channel }) {
      return [...state, channel];
    }
  },
  []
);

const messages = handleActions(
  {
    [actions.addMessage](state, { payload: message }) {
      return [...state, message];
    }
  },
  []
);

const currentChannelId = handleActions(
  {
    [actions.addChannel](state, { payload: channel }) {
      return state || channel.id;
    },
    [actions.changeCurrentChannel](
      state,
      {
        payload: { id }
      }
    ) {
      return id;
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

const rootReducer = combineReducers({
  channels,
  messages,
  currentChannelId,
  messageSendingState,
  channelCreatingState,
  form: formReducer
});

export default rootReducer;
