import React from 'react';
import styled from 'styled-components';
import ChannelsListContainer from '../containers/ChannelsListContainer';
import MessagesContainer from '../containers/MessagesContainer';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  height: 100%;
`;

const Root = () => (
  <Div>
    <ChannelsListContainer />
    <MessagesContainer />
  </Div>
);

export default Root;
