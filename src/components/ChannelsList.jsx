import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, ListGroup } from 'reactstrap';
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
      <Col xs="4" lg="3">
        <NewChannelForm />
        <ListGroup>
          {allIds.map((id) => {
            const channel = byId[id];
            return <ChannelLink key={id} {...channel} />;
          })}
        </ListGroup>
        {channelRemoveId && <RemoveChannelForm />}
        {channelRenameId && <RenameChannelForm />}
      </Col>
    );
  }
}
