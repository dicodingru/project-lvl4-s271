import React from 'react';
import ChannelsList from './ChannelsList';
import Messages from './Messages';
import Error from './Error';

const Root = () => (
  <div className="container-fluid">
    <div style={{ minWidth: '576px' }} className="row h-100 align-items-between">
      <ChannelsList />
      <Messages />
    </div>
    <Error />
  </div>
);

export default Root;
