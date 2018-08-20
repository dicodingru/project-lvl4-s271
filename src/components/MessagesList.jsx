import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Message from './Message';

const MessagesList = ({ messages }) => (
  <div className="">
    {messages.map((item) => <Message key={_.uniqueId()} message={item} />)}
  </div>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      channelId: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

export default MessagesList;
