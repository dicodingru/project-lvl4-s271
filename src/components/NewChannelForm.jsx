import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import connect from '../connect';
import Error from './Error';

const mapStateToProps = (state) => {
  const props = {
    networkErrorState: state.networkErrorState
  };
  return props;
};

@connect(mapStateToProps)
@reduxForm({ form: 'newChannel' })
class NewChannelForm extends Component {
  static propTypes = {
    networkErrorState: PropTypes.string.isRequired,
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
    const { handleSubmit, networkErrorState, pristine, submitting } = this.props;
    const isError = networkErrorState === 'failed';
    return (
      <form className="mb-4 w-100" onSubmit={handleSubmit(this.add)}>
        {isError && <Error />}
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-9">
            <Field
              className="form-control"
              name="name"
              type="text"
              component="input"
              required
            />
          </div>
          <div className="col-3">
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
