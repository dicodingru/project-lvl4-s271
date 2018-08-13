import faker from 'faker';
import cookies from 'js-cookie';
import gon from 'gon';
import io from 'socket.io-client';

import { createStore } from 'redux';
import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import getApp from './App';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

/* eslint-disable no-underscore-dangle */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

const username = faker.name.findName();
cookies.set('name', username);

const { channels, messages, currentChannelId } = gon;
const initialState = { channels, messages, currentChannelId, username };

const store = createStore(
  rootReducer,
  initialState,
  reduxDevtools && reduxDevtools()
);

const socket = io();

getApp(store, socket);
