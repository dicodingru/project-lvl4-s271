import React from 'react';
import { Container, Row } from 'reactstrap';
import ChannelsList from './ChannelsList';
import Messages from './Messages';
import Error from './Error';

const Root = () => (
  <Container fluid>
    <Row style={{ minWidth: '576px' }} className="h-100">
      <ChannelsList />
      <Messages />
    </Row>
    <Error />
  </Container>
);

export default Root;
