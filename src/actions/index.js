import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const addChannel = createAction('CHANNEL_ADD');
export const deleteChannel = createAction('CHANNEL_DELETE');
export const updateChannel = createAction('CHANNEL_UPDATE');
export const changeCurrentChannel = createAction('CURRENT_CHANNEL_CHANGE');

export const createChannelNone = createAction('CHANNEL_CREATE_NONE');
export const createChannelRequest = createAction('CHANNEL_CREATE_REQUEST');
export const createChannelSuccess = createAction('CHANNEL_CREATE_SUCCESS');
export const createChannelFailure = createAction('CHANNEL_CREATE_FAILURE');

export const removeChannelNone = createAction('CHANNEL_REMOVE_NONE');
export const removeChannelRequest = createAction('CHANNEL_REMOVE_REQUEST');
export const removeChannelSuccess = createAction('CHANNEL_REMOVE_SUCCESS');
export const removeChannelFailure = createAction('CHANNEL_REMOVE_FAILURE');

export const renameChannelNone = createAction('CHANNEL_RENAME_NONE');
export const renameChannelRequest = createAction('CHANNEL_RENAME_REQUEST');
export const renameChannelSuccess = createAction('CHANNEL_RENAME_SUCCESS');
export const renameChannelFailure = createAction('CHANNEL_RENAME_FAILURE');

export const createChannel = (data, reset) => async (dispatch) => {
  dispatch(createChannelRequest());
  try {
    const url = routes.channelsUrl();
    await axios.post(url, { data });
    dispatch(createChannelSuccess());
    reset();
  } catch (e) {
    dispatch(createChannelFailure());
    setTimeout(() => {
      dispatch(createChannelNone());
    }, 3000);
  }
};

export const removeChannel = (id) => async (dispatch) => {
  dispatch(removeChannelRequest());
  try {
    const url = routes.channelUrl(id);
    await axios.delete(url);
    dispatch(removeChannelSuccess());
  } catch (e) {
    dispatch(removeChannelFailure());
    setTimeout(() => {
      dispatch(removeChannelNone());
    }, 3000);
  }
};

export const renameChannel = (id, data) => async (dispatch) => {
  dispatch(renameChannelRequest());
  try {
    const url = routes.channelUrl(id);
    await axios.patch(url, { data });
    dispatch(renameChannelSuccess());
  } catch (e) {
    dispatch(renameChannelFailure());
    setTimeout(() => {
      dispatch(renameChannelNone());
    }, 3000);
  }
};

export const addMessage = createAction('MESSAGE_ADD');

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
  deleteChannel,
  updateChannel,
  changeCurrentChannel,
  createChannelRequest,
  createChannelSuccess,
  createChannelFailure,
  createChannelNone,
  createChannel,
  removeChannelRequest,
  removeChannelSuccess,
  removeChannelFailure,
  removeChannelNone,
  removeChannel,
  renameChannelRequest,
  renameChannelSuccess,
  renameChannelFailure,
  renameChannelNone,
  renameChannel,
  addMessage,
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure,
  sendMessageNone,
  sendMessage
};
