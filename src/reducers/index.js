import { combineReducers } from 'redux';

const channels = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ channels });

export default rootReducer;
