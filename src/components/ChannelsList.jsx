import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChannelLink from './ChannelLink';

const Div = styled.div`
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

const ChannelsList = (props) => {
  const { channels } = props;
  return (
    <Div>
      {channels.map(({ id, name }) => (
        <ChannelLink key={id} name={name}>
          name
        </ChannelLink>
      ))}
    </Div>
  );
};

ChannelsList.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      removable: PropTypes.bool
    })
  ).isRequired
};

export default ChannelsList;
