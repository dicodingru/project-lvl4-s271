import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const setNetworkErrorState = createAction('NETWORK_ERROR_STATE_FAILURE');
export const clearNetworkErrorState = createAction('NETWORK_ERROR_STATE_NONE');
const handleError = (dispatch) => {
  dispatch(setNetworkErrorState());
  setTimeout(() => {
    dispatch(clearNetworkErrorState());
  }, 3000);
};

export const addMessage = createAction('MESSAGE_ADD');
export const sendMessage = (data, currentChannelId, reset) => async (dispatch) => {
  try {
    const url = routes.messagesUrl(currentChannelId);
    await axios.post(url, { data });
    reset();
  } catch (e) {
    handleError(dispatch);
  }
};

export const addChannel = createAction('CHANNEL_ADD');
export const createChannel = (data, reset) => async (dispatch) => {
  try {
    const url = routes.channelsUrl();
    await axios.post(url, { data });
    reset();
  } catch (e) {
    handleError(dispatch);
  }
};

export const deleteChannel = createAction('CHANNEL_DELETE');
export const removeChannel = (id) => async (dispatch) => {
  try {
    const url = routes.channelUrl(id);
    await axios.delete(url);
  } catch (e) {
    handleError(dispatch);
  }
};

export const updateChannel = createAction('CHANNEL_UPDATE');
export const renameChannel = (id, data) => async (dispatch) => {
  try {
    const url = routes.channelUrl(id);
    await axios.patch(url, { data });
  } catch (e) {
    handleError(dispatch);
  }
};

export const changeCurrentChannel = createAction('CURRENT_CHANNEL_CHANGE');

export default {
  setNetworkErrorState,
  clearNetworkErrorState,
  addMessage,
  sendMessage,
  addChannel,
  deleteChannel,
  updateChannel,
  createChannel,
  removeChannel,
  renameChannel,
  changeCurrentChannel
};
