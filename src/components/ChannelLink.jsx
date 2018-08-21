import React from 'react';
import PropTypes from 'prop-types';

const ChannelLink = (props) => {
  const { name, isActive, onClick } = props;
  const linkClass = `list-group-item${isActive ? ' list-group-item-success' : ''}`;
  return (
    <div>
      <a className={linkClass} href={`#${name}`} onClick={onClick}>
        <span># {name}</span>
      </a>
    </div>
  );
};

ChannelLink.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ChannelLink;
