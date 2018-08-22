import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import actionCreators, { addChannel } from '../actions';
import Error from './Error';

const mapStateToProps = (state) => {
  const props = {
    channelCreatingState: state.channelCreatingState
  };
  return props;
};

@connect(mapStateToProps, actionCreators)
@reduxForm({ form: 'newChannel' })
class NewChannelForm extends Component {
  static propTypes = {
    channelCreatingState: PropTypes.string.isRequired,
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
    const { handleSubmit, channelCreatingState, pristine, submitting } = this.props;
    const isError = channelCreatingState === 'failed';
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
