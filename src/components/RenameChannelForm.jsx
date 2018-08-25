import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import cn from 'classnames';

@reduxForm({
  form: 'renameChannel'
})
class RenameChannelForm extends Component {
  static propTypes = {
    onRename: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isRenaming: PropTypes.bool.isRequired
  };

  rename = ({ name }) => {
    const { onRename } = this.props;
    const data = {
      attributes: {
        name
      }
    };
    onRename(data);
  };

  render() {
    const { handleSubmit, isRenaming } = this.props;
    const modalClass = cn({
      modal: true,
      'd-flex': isRenaming
    });

    return (
      <div className={modalClass}>
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
