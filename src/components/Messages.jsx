import React from 'react';
import MessagesList from './MessagesList';
import NewMessageForm from './NewMessageForm';
import UserContext from '../user-context';

const Messages = () => (
  <div
    style={{ overflow: 'hidden' }}
    className="col-8 col-lg-9 d-flex flex-column justify-content-end">
    <MessagesList />
    <UserContext.Consumer>
      {(username) => <NewMessageForm username={username} />}
    </UserContext.Consumer>
  </div>
);

export default Messages;
