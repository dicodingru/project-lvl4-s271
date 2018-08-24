import React from 'react';

const DeleteChannelButton = ({ onClick }) => (
  <a
    href="#del"
    className="badge badge-pill badge-danger d-flex align-items-center"
    onClick={onClick}>
    &times;
  </a>
);

export default DeleteChannelButton;
