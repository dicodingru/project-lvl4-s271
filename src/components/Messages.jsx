import React from 'react';
import { Col } from 'reactstrap';
import MessagesList from './MessagesList';
import NewMessageForm from './NewMessageForm';
import UserContext from '../user-context';

const Messages = () => (
  <Col
    xs="8"
    lg="9"
    style={{ overflow: 'hidden', maxHeight: '100%' }}
    className="d-flex flex-column justify-content-end">
    <MessagesList />
    <UserContext.Consumer>
      {(username) => <NewMessageForm username={username} />}
    </UserContext.Consumer>
  </Col>
);

export default Messages;
