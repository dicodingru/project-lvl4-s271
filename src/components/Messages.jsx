import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessagesList from './MessagesList';
import NewMessageForm from './NewMessageForm';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages
  };
  return props;
};

@connect(mapStateToProps)
export default class Messages extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        channelId: PropTypes.number,
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  };

  static defaultProps = {
    messages: []
  };

  render() {
    const { messages } = this.props;
    return (
      <div className="p-3 col-10 h-100 d-flex flex-column justify-content-end align-items-stretch">
        <MessagesList messages={messages} />
        <NewMessageForm />
      </div>
    );
  }
}
