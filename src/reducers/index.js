import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions';

const networkErrorState = handleActions(
  {
    [actions.clearNetworkErrorState]() {
      return 'none';
    },
    [actions.setNetworkErrorState]() {
      return 'failed';
    }
  },
  'none'
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

const rootReducer = combineReducers({
  networkErrorState,
  messages,
  channels,
  currentChannelId,
  form: formReducer
});

export default rootReducer;
