import { createAction } from 'redux-actions';

export const addChannel = createAction('CHANNEL_ADD');
export const addMessage = createAction('MESSAGE_ADD');

export default {
  addChannel,
  addMessage
};
