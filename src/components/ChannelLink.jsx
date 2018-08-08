import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  margin-bottom: 10px;
`;

const ChannelLink = (props) => {
  const { name } = props;
  return (
    <Div>
      <a href={`#${name}`}>
        <span>{name}</span>
      </a>
    </Div>
  );
};

ChannelLink.propTypes = {
  name: PropTypes.string.isRequired
};

export default ChannelLink;
