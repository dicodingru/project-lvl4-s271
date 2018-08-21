import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import actionCreators from '../actions';
import Error from './Error';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    messageSendingState: state.messageSendingState
  };
  return props;
};

@connect(mapStateToProps, actionCreators)
@reduxForm({ form: 'newMessage' })
class NewMessageForm extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    currentChannelId: PropTypes.number.isRequired,
    messageSendingState: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired
  };

  send = ({ text }) => {
    const { username, currentChannelId, sendMessage, reset } = this.props;
    const data = {
      attributes: {
        username,
        text
      }
    };
    sendMessage(data, currentChannelId, reset);
  };

  render() {
    const { handleSubmit, messageSendingState } = this.props;
    const disabled = messageSendingState === 'requested';
    const isError = messageSendingState === 'failed';
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
            <button className="btn btn-primary" type="submit" disabled={disabled}>
              Send
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewMessageForm;
