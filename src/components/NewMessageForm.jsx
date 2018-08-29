import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import connect from '../connect';
import Error from './Error';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    networkErrorState: state.networkErrorState
  };
  return props;
};

@connect(mapStateToProps)
@reduxForm({ form: 'newMessage' })
class NewMessageForm extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    currentChannelId: PropTypes.number.isRequired,
    networkErrorState: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
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
    return sendMessage(data, currentChannelId, reset);
  };

  render() {
    const { handleSubmit, networkErrorState, pristine, submitting } = this.props;
    const isError = networkErrorState === 'failed';
    return (
      <form className="form-inline mb-3" onSubmit={handleSubmit(this.send)}>
        {isError && <Error />}
        <div className="input-group w-100">
          <Field
            className="form-control"
            name="text"
            type="text"
            component="input"
            required
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={pristine || submitting}>
              Send
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewMessageForm;
