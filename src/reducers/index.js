import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions';
import channels from './channels';

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

const currentChannelId = handleActions(
  {
    [actions.addChannel](
      state,
      {
        payload: { channel }
      }
    ) {
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
        payload: { id, generalId }
      }
    ) {
      return state === id ? generalId : state;
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
