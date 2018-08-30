import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import connect from '../connect';

const mapStateToProps = ({ channelRemoveId }) => {
  const props = {
    channelRemoveId
  };
  return props;
};
@connect(mapStateToProps)
@reduxForm({
  form: 'removeChannel'
})
class RemoveChannelForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    removeChannel: PropTypes.func.isRequired,
    endChannelRemove: PropTypes.func.isRequired,
    channelRemoveId: PropTypes.number
  };

  static defaultProps = {
    channelRemoveId: null
  };

  remove = () => {
    const { channelRemoveId, removeChannel, endChannelRemove } = this.props;
    removeChannel(channelRemoveId);
    endChannelRemove();
  };

  cancel = () => {
    const { endChannelRemove } = this.props;
    endChannelRemove();
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="modal d-block w-25 mx-auto">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit(this.remove)}>
                <div className="form-group">
                  <div className="form-row justify-content-around">
                    <button type="submit" className="btn btn-danger">
                      Yes
                    </button>
                    <button type="button" className="btn btn-info" onClick={this.cancel}>
                      No
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RemoveChannelForm;
