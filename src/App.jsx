import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { addMessage } from './actions';
import Root from './components/Root';

export default (store, socket) => {
  socket.on('newMessage', ({ data }) => {
    const { attributes } = data;
    store.dispatch(addMessage({ ...attributes }));
  });

  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('chat')
  );
};
