import React from 'react';
import PropTypes from 'prop-types';

const Channels = (props) => {
  const { channels } = props;
  return <ul>{channels.map(({ id, name }) => <li key={id}>name</li>)}</ul>;
};

Channels.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      removable: PropTypes.bool
    })
  ).isRequired
};

export default Channels;
