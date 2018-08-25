import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChannelLink from './ChannelLink';
import * as actionCreators from '../actions';
import NewChannelForm from './NewChannelForm';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId,
    channelRemovingState: state.channelRemovingState,
    channelRenamingState: state.channelRenamingState
  };
  return props;
};

@connect(mapStateToProps, actionCreators)
export default class ChannelsList extends Component {
  static propTypes = {
    channels: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        removable: PropTypes.bool
      })
    ).isRequired,
    currentChannelId: PropTypes.number.isRequired,
    changeCurrentChannel: PropTypes.func.isRequired,
    removeChannel: PropTypes.func.isRequired,
    renameChannel: PropTypes.func.isRequired,
    channelRemovingState: PropTypes.string.isRequired,
    channelRenamingState: PropTypes.string.isRequired
  };

  handleClick = (id) => () => {
    const { changeCurrentChannel } = this.props;
    changeCurrentChannel({ id });
  };

  handleRemove = (id) => () => {
    const { removeChannel } = this.props;
    removeChannel(id);
  };

  handleRename = (id) => (data) => {
    const { renameChannel } = this.props;
    renameChannel(id, data);
  };

  render() {
    const {
      channels,
      currentChannelId,
      channelRemovingState,
      channelRenamingState
    } = this.props;
    return (
      <div className="col-3 h-100 d-flex flex-column justify-content-start align-items-center">
        <NewChannelForm />
        <div className="list-group w-100">
          {channels.map(({ id, name, removable }) => (
            <ChannelLink
              key={id}
              name={name}
              isActive={id === currentChannelId}
              isRemovable={removable}
              onClick={this.handleClick(id)}
              handleRemove={this.handleRemove(id)}
              handleRename={this.handleRename(id)}
              isError={
                channelRemovingState === 'failed' || channelRenamingState === 'failed'
              }
            />
          ))}
        </div>
      </div>
    );
  }
}
