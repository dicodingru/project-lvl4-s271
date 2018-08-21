const host = '/api/v1/channels';

export default {
  messagesUrl: (currentChannelId) => [host, currentChannelId, 'messages'].join('/'),
  channelsUrl: () => host
};
