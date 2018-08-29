import React from 'react';
import ChannelsList from './ChannelsList';
import Messages from './Messages';

const Root = () => (
  <div className="container-fluid">
    <div style={{ minWidth: '576px' }} className="row h-100 align-items-between">
      <ChannelsList />
      <Messages />
    </div>
  </div>
);

export default Root;
