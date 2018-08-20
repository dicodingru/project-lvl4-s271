import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import Root from '../src/components/Root';
import rootReducer from '../src/reducers';
import UserContext from '../src/user-context';

const initialState = {
  channels: [
    { id: 1, name: 'general', removable: false },
    { id: 2, name: 'random', removable: false }
  ],
  messages: [
    { id: 1, channelId: 1, username: 'user1', text: 'message1' },
    { id: 2, channelId: 1, username: 'user2', text: 'message2' }
  ],
  currentChannelId: 1
};
const store = createStore(rootReducer, initialState);

test('App', () => {
  const component = renderer.create(
    <Provider store={store}>
      <UserContext.Provider value="User Name">
        <Root />
      </UserContext.Provider>
    </Provider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
