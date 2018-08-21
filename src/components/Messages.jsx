import React from 'react';
import MessagesList from './MessagesList';
import NewMessageForm from './NewMessageForm';
import UserContext from '../user-context';

const Messages = () => (
  <div className="p-3 col-9 h-100 d-flex flex-column justify-content-end align-items-stretch">
    <MessagesList />
    <UserContext.Consumer>
      {(username) => <NewMessageForm username={username} />}
    </UserContext.Consumer>
  </div>
);

export default Messages;
