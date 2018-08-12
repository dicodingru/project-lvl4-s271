import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import cookies from 'js-cookie';
import gon from 'gon';
import io from 'socket.io-client';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import App from './components/App';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const username = faker.name.findName();
cookies.set('name', username);

const socket = io();

const { channels, messages, currentChannelId } = gon;
const initialState = { channels, messages, currentChannelId, username };

ReactDOM.render(
  <App initialState={initialState} socket={socket} />,
  document.getElementById('chat')
);
