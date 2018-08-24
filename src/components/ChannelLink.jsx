import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import DeleteChannelButton from './DeleteChannelButton';
import DeleteChannelForm from './DeleteChannelForm';

class ChannelLink extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  };

  state = {
    isHovering: false,
    isConfirmed: false
  };

  onRemove = () => {
    const { handleRemove } = this.props;
    this.setState({ isConfirmed: false });
    handleRemove();
  };

  onConfirm = () => {
    this.setState({ isConfirmed: true });
  };

  toggleHoverState = () => {
    this.setState(({ isHovering }) => ({ isHovering: !isHovering }));
  };

  render() {
    const { name, isActive, onClick } = this.props;
    const linkClass = cn({
      'list-group-item': true,
      'list-group-item-success': isActive,
      'd-flex': true,
      'justify-content-between': true
    });
    const { isHovering, isConfirmed } = this.state;
    return (
      <div
        className={linkClass}
        onMouseEnter={this.toggleHoverState}
        onMouseLeave={this.toggleHoverState}>
        <a href={`#${name}`} onClick={onClick}>
          <span># {name}</span>
        </a>
        {isHovering && !isConfirmed && <DeleteChannelButton onClick={this.onConfirm} />}
        {isConfirmed && <DeleteChannelForm onRemove={this.onRemove} />}
      </div>
    );
  }
}

export default ChannelLink;
