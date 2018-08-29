import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import Root from '../src/components/Root';
import rootReducer from '../src/reducers';
import UserContext from '../src/user-context';

const initialState = {
  channels: {
    byId: {
      1: { id: 1, name: 'general', removable: false },
      2: { id: 2, name: 'random', removable: false }
    },
    allIds: [1, 2]
  },
  messages: [],
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
