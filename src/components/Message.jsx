import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { message } = props;
  return (
    <div className="border rounded mt-1 p-1">
      {message.username}: <span>{message.text}</span>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number,
    channelId: PropTypes.number,
    username: PropTypes.string,
    text: PropTypes.string
  }).isRequired
};

export default Message;
