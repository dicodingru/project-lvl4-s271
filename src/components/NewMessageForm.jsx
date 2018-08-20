import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import axios from 'axios';
import actionCreators from '../actions';

const Error = () => (
  <div className="alert alert-warning" role="alert">
    Something went wrong! Check your internet connection!
  </div>
);

const mapStateToProps = (state) => {
  const props = {
    isSending: state.isSending,
    isError: state.isError,
    username: state.username,
    currentChannelId: state.currentChannelId
  };
  return props;
};

@connect(mapStateToProps, actionCreators)
@reduxForm({ form: 'newMessage' })
class NewMessageForm extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    currentChannelId: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isSending: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired
  };

  send = async (values) => {
    const {
      username,
      currentChannelId,
      reset,
      sendMessage,
      receiveMessage,
      throwSendingError,
      resetSendingError
    } = this.props;
    const { text } = values;
    const data = {
      attributes: {
        username,
        text
      }
    };
    try {
      sendMessage();
      await axios.post(`/api/v1/channels/${currentChannelId}/messages`, {
        data
      });
      receiveMessage();
      reset();
    } catch (err) {
      throwSendingError();
      setTimeout(() => {
        resetSendingError();
      }, 3000);
    }
  };

  render() {
    const { handleSubmit, isSending, isError } = this.props;
    return (
      <form onSubmit={handleSubmit(this.send)}>
        {isError && <Error />}
        <div className="form-row">
          <div className="col-9">
            <Field
              className="form-control"
              name="text"
              type="text"
              component="input"
              required
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary" type="submit" disabled={isSending}>
              Send
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewMessageForm;
