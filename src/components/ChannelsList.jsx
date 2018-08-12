import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChannelLink from './ChannelLink';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId
  };
  return props;
};

@connect(mapStateToProps)
export default class ChannelsList extends Component {
  static propTypes = {
    channels: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        removable: PropTypes.bool
      })
    ).isRequired
  };

  render() {
    const { channels } = this.props;
    return (
      <div className="col-2 h-100 d-flex flex-column justify-content-start align-items-center">
        <div className="list-group">
          {channels.map(({ id, name }) => <ChannelLink key={id} name={name} />)}
        </div>
      </div>
    );
  }
}
