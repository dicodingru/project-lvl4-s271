import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';
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
    const linkColor = id === currentChannelId ? 'success' : '';
    const anchorStyle = { outline: 0 };

    return (
      <ListGroupItem
        color={linkColor}
        className="d-flex justify-content-between mb-2 rounded"
        onMouseEnter={this.setHoverState}
        onMouseLeave={this.unsetHoverState}>
        <a className="w-100" style={anchorStyle} href={`#${name}`} onClick={this.onClick}>
          <span># {name}</span>
        </a>
        {showButtons && <RenameChannelButton onClick={this.onClickRename} />}
        {showButtons && <RemoveChannelButton onClick={this.onClickRemove} />}
      </ListGroupItem>
    );
  }
}

export default ChannelLink;
