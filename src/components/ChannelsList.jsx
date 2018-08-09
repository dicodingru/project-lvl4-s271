import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ChannelLink from './ChannelLink';

const Div = styled.div`
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

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
      <Div>
        {channels.map(({ id, name }) => (
          <ChannelLink key={id} name={name}>
            name
          </ChannelLink>
        ))}
      </Div>
    );
  }
}
