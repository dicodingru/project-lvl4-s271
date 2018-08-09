import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import findName from 'faker/lib/name';
import cookies from 'js-cookie';

// import gon from 'gon';
// import io from 'socket.io-client';
import App from './components/App';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const username = cookies.get('name') || findName();
cookies.set('name', username);

ReactDOM.render(<App initialState={gon} />, document.getElementById('chat'));
