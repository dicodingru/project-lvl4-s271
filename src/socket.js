import { addMessage, addChannel, deleteChannel } from './actions';

export default (socket, store) => {
  socket.on('newMessage', ({ data }) => {
    const { attributes } = data;
    store.dispatch(addMessage({ ...attributes }));
  });
  socket.on('newChannel', ({ data }) => {
    const { attributes } = data;
    /** */ console.log('creating channel ', attributes);
    store.dispatch(addChannel({ ...attributes }));
  });
  socket.on('removeChannel', ({ data }) => {
    const { id } = data;
    /** */ console.log('deleting channel ', id);
    store.dispatch(deleteChannel({ id }));
  });
};
