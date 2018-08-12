import React from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addMessage } from '../actions';
import rootReducer from '../reducers';
import Root from './Root';

/* eslint-disable no-underscore-dangle */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

const App = ({ initialState, socket }) => {
  const store = createStore(
    rootReducer,
    initialState,
    reduxDevtools && reduxDevtools()
  );

  socket.on('newMessage', ({ data }) => {
    const { attributes } = data;
    store.dispatch(addMessage({ ...attributes }));
  });

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

App.propTypes = {
  initialState: PropTypes.shape({
    channels: PropTypes.array,
    messages: PropTypes.array
  }).isRequired,
  socket: PropTypes.instanceOf(WebSocket).isRequired
};

export default App;
