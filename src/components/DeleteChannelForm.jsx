import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

@reduxForm({
  form: 'removeChannel'
})
class DeleteChannelForm extends Component {
  static propTypes = {
    onRemove: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    isDeleting: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const { onRemove, onCancel, isDeleting, handleSubmit } = this.props;

    const formStyle = {
      width: '100px',
      position: 'absolute',
      top: '0.3em',
      right: '-110px',
      zIndex: '999',
      display: isDeleting ? 'block' : 'none'
    };

    return (
      <form style={formStyle} onSubmit={handleSubmit(onRemove)}>
        <div className="form-group">
          <div className="form-row">
            <button type="submit" className="btn btn-danger">
              Yes
            </button>
            <button type="button" className="btn btn-info" onClick={onCancel}>
              No
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default DeleteChannelForm;
