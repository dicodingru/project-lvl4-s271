import { connect } from 'react-redux';
import Messages from '../components/Messages';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages
  };
  return props;
};

export default connect(mapStateToProps)(Messages);
