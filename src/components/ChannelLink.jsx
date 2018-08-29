import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import DeleteChannelButton from './DeleteChannelButton';
import DeleteChannelForm from './DeleteChannelForm';
import RenameChannelButton from './RenameChannelButton';
import RenameChannelForm from './RenameChannelForm';
import Error from './Error';

class ChannelLink extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleRename: PropTypes.func.isRequired,
    isRemovable: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
  };

  state = {
    isHovering: false,
    isDeleting: false,
    isRenaming: false,
  };

  onRemove = () => {
    const { handleRemove } = this.props;
    return handleRemove();
  };

  onRename = (data) => {
    const { handleRename } = this.props;
    handleRename(data);
    this.setState({ isRenaming: false });
  };

  onCancel = () => {
    this.setState({ isDeleting: false, isHovering: false });
  };

  onDelete = () => {
    this.setState({ isDeleting: true });
  };

  onEdit = () => {
    this.setState({ isRenaming: true, isHovering: false });
  };

  setHoverState = () => {
    this.setState({ isHovering: true });
  };

  unsetHoverState = () => {
    this.setState({ isHovering: false });
  };

  render() {
    const { name, isActive, onClick, isRemovable, isError } = this.props;
    const linkClass = cn({
      'list-group-item': true,
      'list-group-item-success': isActive,
      'd-flex': true,
      'justify-content-between': true,
      'mb-2': true,
      rounded: true,
    });
    const linkStyle = { position: 'relative' };
    const { isHovering, isDeleting, isRenaming } = this.state;
    const showButtons = isRemovable && isHovering;
    return (
      <div
        className={linkClass}
        style={linkStyle}
        onMouseEnter={this.setHoverState}
        onMouseLeave={this.unsetHoverState}>
        <a className="w-100" href={`#${name}`} onClick={onClick}>
          <span># {name}</span>
        </a>
        {showButtons && <RenameChannelButton onClick={this.onEdit} />}
        {showButtons && <DeleteChannelButton onClick={this.onDelete} />}
        <DeleteChannelForm
          onRemove={this.onRemove}
          onCancel={this.onCancel}
          isDeleting={isDeleting}
        />
        <RenameChannelForm onRename={this.onRename} isRenaming={isRenaming} />
        {isError && <Error />}
      </div>
    );
  }
}

export default ChannelLink;
