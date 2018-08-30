import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import RemoveChannelButton from './RemoveChannelButton';
import RenameChannelButton from './RenameChannelButton';
import connect from '../connect';

const mapStateToProps = ({ currentChannelId }) => {
  const props = {
    currentChannelId
  };
  return props;
};

@connect(mapStateToProps)
class ChannelLink extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    removable: PropTypes.bool.isRequired,
    currentChannelId: PropTypes.number.isRequired,
    changeCurrentChannel: PropTypes.func.isRequired,
    startChannelRemove: PropTypes.func.isRequired,
    startChannelRename: PropTypes.func.isRequired
  };

  state = {
    isHovering: false
  };

  onClick = () => {
    const { id, changeCurrentChannel } = this.props;
    changeCurrentChannel({ id });
  };

  onClickRemove = () => {
    const { id, startChannelRemove } = this.props;
    this.setState({ isHovering: false });
    startChannelRemove({ id });
  };

  onClickRename = () => {
    const { id, startChannelRename } = this.props;
    this.setState({ isHovering: false });
    startChannelRename({ id });
  };

  setHoverState = () => {
    this.setState({ isHovering: true });
  };

  unsetHoverState = () => {
    this.setState({ isHovering: false });
  };

  render() {
    const { isHovering } = this.state;
    const { id, name, removable, currentChannelId } = this.props;
    const showButtons = removable && isHovering;

    const linkClass = cn({
      'list-group-item': true,
      'list-group-item-success': id === currentChannelId,
      'd-flex': true,
      'justify-content-between': true,
      'mb-2': true,
      rounded: true
    });

    const linkStyle = { position: 'relative' };

    return (
      <div
        className={linkClass}
        style={linkStyle}
        onMouseEnter={this.setHoverState}
        onMouseLeave={this.unsetHoverState}>
        <a className="w-100" href={`#${name}`} onClick={this.onClick}>
          <span># {name}</span>
        </a>
        {showButtons && <RenameChannelButton onClick={this.onClickRename} />}
        {showButtons && <RemoveChannelButton onClick={this.onClickRemove} />}
      </div>
    );
  }
}

export default ChannelLink;
