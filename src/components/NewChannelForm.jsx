import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import actionCreators, { addChannel } from '../actions';

const mapStateToProps = (state) => {
  const props = {
    channelCreatingState: state.channelCreatingState
  };
  return props;
};

@connect(mapStateToProps, actionCreators)
@reduxForm({ form: 'newChannel' })
class NewChannelForm extends Component {
  add = ({ name }) => {
    const { createChannel, reset } = this.props;
    const data = {
      attributes: {
        name
      }
    };
    createChannel(data, reset);
  };

  render() {
    const { handleSubmit, channelCreatingState } = this.props;
    const disabled = channelCreatingState === 'requested';
    return (
      <form className="mb-4 w-100" onSubmit={handleSubmit(this.add)}>
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
            <button className="btn btn-success" type="submit" disabled={disabled}>
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewChannelForm;
