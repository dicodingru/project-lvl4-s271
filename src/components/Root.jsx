import React from 'react';
import ChannelsListContainer from '../containers/ChannelsListContainer';
import MessagesContainer from '../containers/MessagesContainer';

const Root = () => (
  <React.Fragment>
    <ChannelsListContainer />
    <MessagesContainer />
  </React.Fragment>
);

export default Root;
