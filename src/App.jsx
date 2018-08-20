import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import UserContext from './user-context';

import Root from './components/Root';

export default (store, username) => {
  ReactDOM.render(
    <Provider store={store}>
      <UserContext.Provider value={username}>
        <Root />
      </UserContext.Provider>
    </Provider>,
    document.getElementById('chat')
  );
};
