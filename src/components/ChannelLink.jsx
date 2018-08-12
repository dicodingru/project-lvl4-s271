import React from 'react';
import PropTypes from 'prop-types';

const ChannelLink = (props) => {
  const { name, isActive } = props;
  const linkClass = `list-group-item${isActive ? ' active' : ''}`;
  return (
    <a className={linkClass} href={`#${name}`}>
      <span>{name}</span>
    </a>
  );
};

ChannelLink.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default ChannelLink;
