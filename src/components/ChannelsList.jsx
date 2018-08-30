import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from '../connect';
import ChannelLink from './ChannelLink';
import NewChannelForm from './NewChannelForm';
import RemoveChannelForm from './RemoveChannelForm';
import RenameChannelForm from './RenameChannelForm';

const mapStateToProps = ({ channels, channelRemoveId, channelRenameId }) => {
  const props = {
    channels,
    channelRemoveId,
    channelRenameId
  };
  return props;
};

@connect(mapStateToProps)
export default class ChannelsList extends Component {
  static propTypes = {
    channels: PropTypes.shape({
      byId: PropTypes.object,
      allIds: PropTypes.arrayOf(PropTypes.number)
    }).isRequired
  };

  render() {
    const {
      channels: { byId, allIds },
      channelRemoveId,
      channelRenameId
    } = this.props;
    return (
      <div className="col-4 col-lg-3">
        <NewChannelForm />
        <div className="list-group">
          {allIds.map((id) => {
            const channel = byId[id];
            return <ChannelLink key={id} {...channel} />;
          })}
        </div>
        {channelRemoveId && <RemoveChannelForm />}
        {channelRenameId && <RenameChannelForm />}
      </div>
    );
  }
}
