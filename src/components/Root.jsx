import React from 'react';
import ChannelsList from './ChannelsList';
import Messages from './Messages';

const Root = () => (
  <div className="p-3 h-100 row">
    <ChannelsList />
    <Messages />
  </div>
);

export default Root;
