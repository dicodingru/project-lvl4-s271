import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import connect from '../connect';
import Message from './Message';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages,
    currentChannelId: state.currentChannelId
  };
  return props;
};

@connect(mapStateToProps)
class MessagesList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        channelId: PropTypes.number,
        text: PropTypes.string
      })
    ).isRequired,
    currentChannelId: PropTypes.number.isRequired
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.last.scrollIntoView();
  }

  render() {
    const { messages, currentChannelId } = this.props;
    return (
      <div
        style={{ overflowY: 'scroll', overflowX: 'hidden' }}
        className="d-flex flex-column mb-3">
        {messages
          .filter(({ channelId }) => channelId === currentChannelId)
          .map((item) => (
            <Message key={_.uniqueId()} message={item} />
          ))}
        <div
          ref={(el) => {
            this.last = el;
          }}
        />
      </div>
    );
  }
}

export default MessagesList;
