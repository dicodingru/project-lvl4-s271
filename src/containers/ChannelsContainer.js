import { connect } from 'react-redux';
import Channels from '../components/Channels';

const mapStateToProps = state => {
  const props = {
    channels: state.channels,
  };
  return props;
};

export default connect(mapStateToProps)(Channels);
