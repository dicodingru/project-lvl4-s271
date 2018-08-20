import faker from 'faker/locale/en';
import cookies from 'js-cookie';
import gon from 'gon';
import io from 'socket.io-client';

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';

import getApp from './App';
import addListeners from './socket';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

/* eslint-disable no-underscore-dangle */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

const username = cookies.get('name') || faker.name.findName();
cookies.set('name', username);

const { channels, messages, currentChannelId } = gon;
const initialState = { channels, messages, currentChannelId };

const store = createStore(
  rootReducer,
  initialState,
  (reduxDevtools && compose(applyMiddleware(thunk), reduxDevtools())) ||
    applyMiddleware(thunk)
);

const socket = io();

addListeners(socket, store);
getApp(store, username);
