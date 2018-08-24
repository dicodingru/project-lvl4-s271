import React from 'react';
import PropTypes from 'prop-types';

const DeleteChannelButton = ({ onClick }) => (
  <a
    href="#del"
    className="badge badge-pill badge-danger d-flex align-items-center"
    onClick={onClick}>
    &times;
  </a>
);

DeleteChannelButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DeleteChannelButton;
