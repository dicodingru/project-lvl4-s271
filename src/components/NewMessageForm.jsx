import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class NewMessageForm extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired
  };

  state = {
    text: ''
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      text: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username } = this.props;
    const { text } = this.state;
    const data = {
      attributes: {
        username,
        text
      }
    };
    axios
      .post('/api/v1/channels/:channelId/messages', { data })
      .then(this.setState({ text: '' }));
  };

  render() {
    const { text } = this.state;
    return (
      <form className="" onSubmit={this.handleSubmit}>
        <div className="p-2 form-row d-flex flex-row justify-content-between">
          <input
            className="col-8 form-control"
            type="text"
            value={text}
            onChange={this.handleChange}
          />
          <button className="col-3 btn btn-primary" type="submit">
            Send
          </button>
        </div>
      </form>
    );
  }
}

export default NewMessageForm;
