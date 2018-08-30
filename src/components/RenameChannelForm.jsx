import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    channelRenameId: state.channelRenameId
  };
  return props;
};

@connect(mapStateToProps)
@reduxForm({
  form: 'renameChannel'
})
class RenameChannelForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    renameChannel: PropTypes.func.isRequired,
    endChannelRename: PropTypes.func.isRequired,
    channelRenameId: PropTypes.number
  };

  static defaultProps = {
    channelRenameId: null
  };

  rename = ({ name }) => {
    const { channelRenameId, renameChannel, endChannelRename } = this.props;
    const data = {
      attributes: {
        name
      }
    };
    renameChannel(channelRenameId, data);
    endChannelRename();
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="modal d-block w-25 mx-auto">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit(this.rename)}>
                <div className="form-row">
                  <Field
                    className="form-control"
                    name="name"
                    component="input"
                    type="text"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    data-dismiss="modal">
                    OK
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RenameChannelForm;
