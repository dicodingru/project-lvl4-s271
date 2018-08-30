import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalBody, Form, FormGroup } from 'reactstrap';

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
    endChannelRemove();
    return removeChannel(channelRemoveId);
  };

  cancel = () => {
    const { endChannelRemove } = this.props;
    endChannelRemove();
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Modal contentClassName="bg-secondary" size="sm" isOpen centered fade={false}>
        <ModalBody>
          <h3 className="text-center">Are you sure?</h3>
          <Form onSubmit={handleSubmit(this.remove)}>
            <FormGroup row className="justify-content-around">
              <Button color="danger">Yes</Button>
              <Button color="success" onClick={this.cancel}>
                No
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default RemoveChannelForm;
