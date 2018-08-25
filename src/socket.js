import { addMessage, addChannel, deleteChannel, updateChannel } from './actions';

export default (socket, store) => {
  socket.on('newMessage', ({ data }) => {
    const { attributes } = data;
    store.dispatch(addMessage({ ...attributes }));
  });
  socket.on('newChannel', ({ data }) => {
    const { attributes } = data;
    store.dispatch(addChannel({ ...attributes }));
  });
  socket.on('removeChannel', ({ data }) => {
    const { id } = data;
    store.dispatch(deleteChannel({ id }));
  });
  socket.on('renameChannel', ({ data }) => {
    const { attributes } = data;
    store.dispatch(updateChannel({ ...attributes }));
  });
};
