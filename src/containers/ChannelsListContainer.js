import { connect } from 'react-redux';
import ChannelsList from '../components/ChannelsList';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId
  };
  return props;
};

export default connect(mapStateToProps)(ChannelsList);
