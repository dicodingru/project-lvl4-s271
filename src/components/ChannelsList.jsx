import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChannelLink from './ChannelLink';
import * as actionCreators from '../actions';
import NewChannelForm from './NewChannelForm';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId
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
    changeCurrentChannel: PropTypes.func.isRequired
  };

  handleClick = (id) => () => {
    const { changeCurrentChannel } = this.props;
    changeCurrentChannel({ id });
  };

  render() {
    const { channels, currentChannelId } = this.props;
    return (
      <div className="col-3 h-100 d-flex flex-column justify-content-start align-items-center">
        <NewChannelForm />
        <div className="list-group w-100">
          {channels.map(({ id, name }) => (
            <ChannelLink
              key={id}
              name={name}
              isActive={id === currentChannelId}
              onClick={this.handleClick(id)}
            />
          ))}
        </div>
      </div>
    );
  }
}
