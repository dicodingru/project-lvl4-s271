import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

const RemoveChannelButton = ({ onClick }) => (
  <a href="#delete" onClick={onClick} className="ml-2">
    <FontAwesomeIcon icon={faTrash} />
  </a>
);

RemoveChannelButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default RemoveChannelButton;
