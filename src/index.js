import faker from 'faker/locale/en';
import cookies from 'js-cookie';
import io from 'socket.io-client';
import gon from 'gon';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';

import configureStore from './store';
import getApp from './App';
import addListeners from './socket';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const username = cookies.get('name') || faker.name.findName();
cookies.set('name', username);

const store = configureStore(gon);

const socket = io();
addListeners(socket, store);

getApp(store, username);
