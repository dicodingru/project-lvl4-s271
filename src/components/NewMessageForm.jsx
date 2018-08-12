import React, { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

const Error = ({ error }) =>
  error && (
    <div className="alert alert-warning" role="alert">
      Something went wrong! Check your internet connection!
    </div>
  );
class NewMessageForm extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    currentChannelId: PropTypes.number.isRequired
  };

  state = {
    text: '',
    error: false
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      text: value,
      isSending: false,
      error: false
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, currentChannelId } = this.props;
    const { text } = this.state;
    const data = {
      attributes: {
        username,
        text
      }
    };
    try {
      this.setState({ isSending: true });
      await axios.post(`/api/v1/channels/${currentChannelId}/messages`, {
        data
      });
      this.setState({ text: '', isSending: false });
    } catch (err) {
      this.setState({ error: true });

      setTimeout(() => {
        this.setState({ error: false });
      }, 3000);

      setTimeout(() => {
        this.setState({ isSending: false });
      }, 250);
    }
  };

  render() {
    const { text, isSending, error } = this.state;

    return (
      <form className="" onSubmit={this.handleSubmit}>
        <Error error={error} />
        <div className="p-2 form-row d-flex flex-row justify-content-between">
          <input
            className="col-8 form-control"
            type="text"
            value={text}
            onChange={this.handleChange}
          />
          <button
            className="col-3 btn btn-primary"
            type="submit"
            disabled={isSending}>
            Send
          </button>
        </div>
      </form>
    );
  }
}

export default NewMessageForm;
