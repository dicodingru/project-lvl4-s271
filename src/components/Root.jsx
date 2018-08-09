import React from 'react';
import styled from 'styled-components';
import ChannelsList from './ChannelsList';
import Messages from './Messages';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  height: 100%;
`;

const Root = () => (
  <Div>
    <ChannelsList />
    <Messages />
  </Div>
);

export default Root;
