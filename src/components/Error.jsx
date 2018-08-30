import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import connect from '../connect';

const mapStateToProps = ({ networkErrorState }) => {
  const props = { networkErrorState };
  return props;
};

@connect(mapStateToProps)
class Error extends Component {
  static propTypes = {
    networkErrorState: PropTypes.bool.isRequired
  };

  render() {
    const { networkErrorState } = this.props;
    return (
      networkErrorState && (
        <Alert color="warning" className="fixed-top">
          Something went wrong! Check your internet connection!
        </Alert>
      )
    );
  }
}

export default Error;
