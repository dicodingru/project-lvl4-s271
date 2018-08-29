import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

export default ({ channels, messages, currentChannelId }) => {
  const normalizedChannels = channels.reduce(
    ({ byId, allIds }, channel) => {
      const { id } = channel;
      return {
        byId: {
          ...byId,
          [id]: channel
        },
        allIds: [...allIds, id]
      };
    },
    {
      byId: {},
      allIds: []
    }
  );

  const initialState = {
    channels: normalizedChannels,
    messages,
    currentChannelId
  };

  const store = createStore(
    rootReducer,
    initialState,
    (reduxDevtools && compose(applyMiddleware(thunk), reduxDevtools())) ||
      applyMiddleware(thunk)
  );

  return store;
};
