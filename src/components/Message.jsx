import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { text } = props;
  return (
    <div>
      <span>{text}</span>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired
};

export default Message;
