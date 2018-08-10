import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';
import Message from './Message';
import NewMessageForm from './NewMessageForm';

const Div = styled.div`
  width: 70%;
  flex-direction: column;
  justify-content: flex-end;
`;

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
      <Div>
        {messages.map((item) => <Message key={_.uniqueId()} message={item} />)}
        <NewMessageForm />
      </Div>
    );
  }
}
