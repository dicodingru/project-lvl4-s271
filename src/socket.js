import { addMessage, addChannel } from './actions';

export default (socket, store) => {
  socket.on('newMessage', ({ data }) => {
    const { attributes } = data;
    store.dispatch(addMessage({ ...attributes }));
  });
  socket.on('newChannel', ({ data }) => {
    const { attributes } = data;
    store.dispatch(addChannel({ ...attributes }));
  });
};
