import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import Message from './Message';
import NewMessageForm from './NewMessageForm';

const Div = styled.div`
  width: 70%;
  flex-direction: column;
  justify-content: flex-end;
`;

const Messages = (props) => {
  const { messages } = props;
  return (
    <Div>
      {messages.map((item) => <Message key={_.uniqueId()} text={item} />)}
      <NewMessageForm />
    </Div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Messages;
