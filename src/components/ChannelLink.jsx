import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import DeleteChannelButton from './DeleteChannelButton';
import DeleteChannelForm from './DeleteChannelForm';

class ChannelLink extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
    isRemovable: PropTypes.bool.isRequired
  };

  state = {
    isHovering: false,
    isConfirmed: false
  };

  onRemove = () => {
    const { handleRemove } = this.props;
    handleRemove();
  };

  onCancel = () => {
    this.setState({ isConfirmed: false, isHovering: false });
  };

  onConfirm = () => {
    this.setState({ isConfirmed: true });
  };

  toggleHoverState = () => {
    this.setState(({ isHovering }) => ({ isHovering: !isHovering }));
  };

  render() {
    const { name, isActive, onClick, isRemovable } = this.props;
    const linkClass = cn({
      'list-group-item': true,
      'list-group-item-success': isActive,
      'd-flex': true,
      'justify-content-between': true
    });
    const linkStyle = { position: 'relative' };
    const { isHovering, isConfirmed } = this.state;
    return (
      <div
        className={linkClass}
        style={linkStyle}
        onMouseEnter={this.toggleHoverState}
        onMouseLeave={this.toggleHoverState}>
        <a className="w-100" href={`#${name}`} onClick={onClick}>
          <span># {name}</span>
        </a>
        {isRemovable &&
          isHovering &&
          !isConfirmed && <DeleteChannelButton onClick={this.onConfirm} />}
        {isConfirmed && (
          <DeleteChannelForm onRemove={this.onRemove} onCancel={this.onCancel} />
        )}
      </div>
    );
  }
}

export default ChannelLink;
