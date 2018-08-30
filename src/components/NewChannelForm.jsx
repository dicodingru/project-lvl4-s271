import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import connect from '../connect';

@connect()
@reduxForm({ form: 'newChannel' })
class NewChannelForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    createChannel: PropTypes.func.isRequired
  };

  add = ({ name }) => {
    const { createChannel, reset } = this.props;
    const data = {
      attributes: {
        name
      }
    };
    return createChannel(data, reset);
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form className="form-inline" onSubmit={handleSubmit(this.add)}>
        <div className="input-group w-100 mb-3">
          <Field
            className="form-control"
            name="name"
            type="text"
            component="input"
            required
          />
          <div className="input-group-append">
            <button
              className="btn btn-success"
              type="submit"
              disabled={pristine || submitting}>
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewChannelForm;
