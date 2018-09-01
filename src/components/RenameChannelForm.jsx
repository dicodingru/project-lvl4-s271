import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Button, Col, Modal, ModalBody, Form, FormGroup } from 'reactstrap';
import Hotkeys from 'react-hot-keys';
import connect from '../connect';

const mapStateToProps = ({ channels: { byId }, channelRenameId }) => {
  const props = {
    channelRenameId,
    initialValues: { name: byId[channelRenameId].name }
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
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    renameChannel: PropTypes.func.isRequired,
    endChannelRename: PropTypes.func.isRequired,
    channelRenameId: PropTypes.number
  };

  static defaultProps = {
    channelRenameId: null
  };

  name = React.createRef();

  componentDidMount() {
    const field = this.name.current.getRenderedComponent();
    field.select();
  }

  rename = ({ name }) => {
    const { channelRenameId, renameChannel, endChannelRename } = this.props;
    const data = {
      attributes: {
        name
      }
    };
    endChannelRename();
    return renameChannel(channelRenameId, data);
  };

  cancel = () => {
    const { endChannelRename } = this.props;
    endChannelRename();
  };

  renderInputField = () => {
    const { endChannelRename } = this.props;
    return (
      <Hotkeys keyName="esc" onKeyDown={endChannelRename}>
        <Field
          className="form-control"
          name="name"
          component="input"
          type="text"
          ref={this.name}
          required
          withRef
        />
      </Hotkeys>
    );
  };

  renderButtons = () => {
    const { pristine, submitting } = this.props;
    return (
      <FormGroup row className="justify-content-around">
        <Button color="success" onClick={this.cancel}>
          Cancel
        </Button>
        <Button color="danger" disabled={pristine || submitting}>
          Rename
        </Button>
      </FormGroup>
    );
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Modal contentClassName="bg-secondary" size="sm" isOpen centered fade={false}>
        <ModalBody>
          <Form onSubmit={handleSubmit(this.rename)}>
            <FormGroup row className="mb-2">
              <Col>{this.renderInputField()}</Col>
            </FormGroup>
            {this.renderButtons()}
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default RenameChannelForm;
