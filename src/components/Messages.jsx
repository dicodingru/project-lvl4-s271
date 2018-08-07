import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Message from './Message';
import NewMessageForm from './NewMessageForm';

const Messages = (props) => {
  const { messages } = props;
  return (
    <div>
      {messages.map((item) => <Message key={_.uniqueId()} text={item} />)}
      <NewMessageForm />
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Messages;
