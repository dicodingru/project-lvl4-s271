import { addMessage, addChannel, deleteChannel, updateChannel } from './actions';

export default (socket, store) => {
  socket.on('newMessage', ({ data }) => {
    const { attributes } = data;
    store.dispatch(addMessage({ ...attributes }));
  });
  socket.on('newChannel', ({ data }) => {
    const { attributes } = data;
    store.dispatch(addChannel({ channel: attributes }));
  });
  socket.on('removeChannel', ({ data }) => {
    const { id } = data;
    const { allIds } = store.getState().channels;
    const generalId = allIds[0];
    store.dispatch(deleteChannel({ id, generalId }));
  });
  socket.on('renameChannel', ({ data }) => {
    const { attributes } = data;
    store.dispatch(updateChannel({ channel: attributes }));
  });
};
