import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { message } = props;
  return (
    <div>
      <span>{message.text}</span>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    channelId: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Message;
