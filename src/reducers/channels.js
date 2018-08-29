import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import _ from 'lodash';
import * as actions from '../actions';

const byId = handleActions(
  {
    [actions.addChannel](
      state,
      {
        payload: { channel }
      }
    ) {
      return { ...state, [channel.id]: channel };
    },
    [actions.deleteChannel](
      state,
      {
        payload: { id }
      }
    ) {
      return _.omit(state, id);
    },
    [actions.updateChannel](
      state,
      {
        payload: { channel }
      }
    ) {
      return { ...state, [channel.id]: channel };
    }
  },
  {}
);

const allIds = handleActions(
  {
    [actions.addChannel](
      state,
      {
        payload: {
          channel: { id }
        }
      }
    ) {
      return [...state, id];
    },
    [actions.deleteChannel](
      state,
      {
        payload: { id }
      }
    ) {
      return state.filter((channelId) => channelId !== id);
    }
  },
  []
);

const channels = combineReducers({ byId, allIds });

export default channels;
