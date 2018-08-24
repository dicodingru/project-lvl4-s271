import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DeleteChannelForm = ({ onRemove, onCancel }) => {
  const formStyle = {
    width: '100px',
    position: 'absolute',
    top: '0.3em',
    right: '-110px',
    zIndex: '999'
  };
  return (
    <form style={formStyle}>
      <div className="form-group">
        <div className="form-row">
          <button type="button" className="btn btn-danger" onClick={onRemove}>
            Yes
          </button>
          <button type="button" className="btn btn-info" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </form>
  );
};

DeleteChannelForm.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default DeleteChannelForm;
