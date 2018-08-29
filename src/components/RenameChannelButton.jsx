import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';

const RenameChannelButton = ({ onClick }) => (
  <a href="#rename" onClick={onClick}>
    <FontAwesomeIcon icon={faEdit} />
  </a>
);

RenameChannelButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default RenameChannelButton;
