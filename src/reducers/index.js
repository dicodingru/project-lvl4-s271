import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
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

const username = handleActions({}, null);

const rootReducer = combineReducers({
  channels,
  messages,
  currentChannelId,
  username
});

export default rootReducer;
