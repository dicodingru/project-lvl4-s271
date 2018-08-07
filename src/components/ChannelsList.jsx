import React from 'react';
import PropTypes from 'prop-types';
import ChannelLink from './ChannelLink';

const ChannelsList = (props) => {
  const { channels } = props;
  return (
    <div>
      {channels.map(({ id, name }) => (
        <ChannelLink key={id} name={name}>
          name
        </ChannelLink>
      ))}
    </div>
  );
};

ChannelsList.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      removable: PropTypes.bool
    })
  ).isRequired
};

export default ChannelsList;
