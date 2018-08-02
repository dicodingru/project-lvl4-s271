import React from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "../reducers";
import Root from './Root';

/* eslint-disable no-underscore-dangle */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

const App = ({ initialState }) => {
  const store = createStore(
    rootReducer,
    initialState,
    reduxDevtools && reduxDevtools()
  );
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
  }).isRequired
};

export default App;
