import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DeleteChannelForm = ({ onRemove }) => (
  <form className="w-100">
    <div className="form-group">
      <div className="form-row">
        <p className="form-text">Are you sure?</p>
      </div>
      <div className="form-row">
        <button type="button" className="btn btn-danger" onClick={onRemove}>
          Yes
        </button>
        <button type="button" className="btn btn-danger">
          No
        </button>
      </div>
    </div>
  </form>
);

export default DeleteChannelForm;
