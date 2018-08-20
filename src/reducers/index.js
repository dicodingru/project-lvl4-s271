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
    }
  },
  null
);

const isSending = handleActions(
  {
    [actions.sendMessage]() {
      return true;
    },
    [actions.receiveMessage]() {
      return false;
    },
    [actions.resetSendingError]() {
      return false;
    }
  },
  false
);

const isError = handleActions(
  {
    [actions.throwSendingError]() {
      return true;
    },
    [actions.resetSendingError]() {
      return false;
    }
  },
  false
);

const rootReducer = combineReducers({
  channels,
  messages,
  currentChannelId,
  isSending,
  isError,
  form: formReducer
});

export default rootReducer;
