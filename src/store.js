import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

export default (gon) => {
  const { channels, messages, currentChannelId } = gon;

  const initialState = { channels, messages, currentChannelId };

  const store = createStore(
    rootReducer,
    initialState,
    (reduxDevtools && compose(applyMiddleware(thunk), reduxDevtools())) ||
      applyMiddleware(thunk)
  );

  return store;
};
