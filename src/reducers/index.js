import { combineReducers } from 'redux';

const channels = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const messages = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ channels, messages });

export default rootReducer;
