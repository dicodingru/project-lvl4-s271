import React from 'react';
import PropTypes from 'prop-types';

const ChannelLink = (props) => {
  const { name } = props;
  return (
    <a className="list-group-item" href={`#${name}`}>
      <span>{name}</span>
    </a>
  );
};

ChannelLink.propTypes = {
  name: PropTypes.string.isRequired
};

export default ChannelLink;
