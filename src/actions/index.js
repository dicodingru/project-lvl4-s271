import { createAction } from 'redux-actions';

export const addChannel = createAction('CHANNEL_ADD');
export const addMessage = createAction('MESSAGE_ADD');
export const sendMessage = createAction('MESSAGE_SEND');
export const receiveMessage = createAction('MESSAGE_RECEIVE');
export const throwSendingError = createAction('ERROR_THROW');
export const resetSendingError = createAction('ERROR_RESET');

export default {
  addChannel,
  addMessage,
  sendMessage,
  receiveMessage,
  throwSendingError,
  resetSendingError
};
