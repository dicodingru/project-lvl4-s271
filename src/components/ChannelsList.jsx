import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from '../connect';
import ChannelLink from './ChannelLink';
import NewChannelForm from './NewChannelForm';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId,
    channelRemovingState: state.channelRemovingState,
    networkErrorState: state.networkErrorState
  };
  return props;
};

@connect(mapStateToProps)
export default class ChannelsList extends Component {
  static propTypes = {
    channels: PropTypes.shape({
      byId: PropTypes.object,
      allIds: PropTypes.arrayOf(PropTypes.number)
    }).isRequired,
    currentChannelId: PropTypes.number.isRequired,
    changeCurrentChannel: PropTypes.func.isRequired,
    removeChannel: PropTypes.func.isRequired,
    renameChannel: PropTypes.func.isRequired,
    networkErrorState: PropTypes.string.isRequired
  };

  handleClick = (id) => () => {
    const { changeCurrentChannel } = this.props;
    changeCurrentChannel({ id });
  };

  handleRemove = (id) => () => {
    const { removeChannel } = this.props;
    return removeChannel(id);
  };

  handleRename = (id) => (data) => {
    const { renameChannel } = this.props;
    renameChannel(id, data);
  };

  render() {
    const {
      channels: { byId, allIds },
      currentChannelId,
      networkErrorState
    } = this.props;
    return (
      <div className="col-4 col-lg-3">
        <NewChannelForm />
        <div className="list-group">
          {allIds.map((id) => {
            const { name, removable } = byId[id];
            return (
              <ChannelLink
                key={id}
                name={name}
                isActive={id === currentChannelId}
                isRemovable={removable}
                onClick={this.handleClick(id)}
                handleRemove={this.handleRemove(id)}
                handleRename={this.handleRename(id)}
                isError={networkErrorState === 'failed'}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
