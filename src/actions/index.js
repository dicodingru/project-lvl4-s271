import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const addChannel = createAction('CHANNEL_ADD');
export const addMessage = createAction('MESSAGE_ADD');
export const changeCurrentChannel = createAction('CURRENT_CHANNEL_CHANGE');

export const sendMessageNone = createAction('MESSAGE_SEND_NONE');
export const sendMessageRequest = createAction('MESSAGE_SEND_REQUEST');
export const sendMessageSuccess = createAction('MESSAGE_SEND_SUCCESS');
export const sendMessageFailure = createAction('MESSAGE_SEND_FAILURE');

export const sendMessage = (data, currentChannelId, reset) => async (dispatch) => {
  dispatch(sendMessageRequest());
  try {
    const url = routes.messagesUrl(currentChannelId);
    await axios.post(url, { data });
    dispatch(sendMessageSuccess());
    reset();
  } catch (e) {
    dispatch(sendMessageFailure());
    setTimeout(() => {
      dispatch(sendMessageNone());
    }, 3000);
  }
};

export default {
  addChannel,
  addMessage,
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure,
  sendMessageNone,
  sendMessage
};
