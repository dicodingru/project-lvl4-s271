import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      <div>
        {networkErrorState && (
          <div className="fixed-top alert alert-warning" role="alert">
            Something went wrong! Check your internet connection!
          </div>
        )}
      </div>
    );
  }
}

export default Error;
