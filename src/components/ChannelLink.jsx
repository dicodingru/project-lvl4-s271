import React from 'react';
import PropTypes from 'prop-types';

const ChannelLink = (props) => {
  const { name, isActive, onClick } = props;
  const linkClass = `list-group-item${isActive ? ' active' : ''}`;
  return (
    <a className={linkClass} href={`#${name}`} onClick={onClick}>
      <span>{name}</span>
    </a>
  );
};

ChannelLink.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ChannelLink;
