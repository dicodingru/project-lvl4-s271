import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Form, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import connect from '../connect';

const mapStateToProps = ({ currentChannelId }) => {
  const props = {
    currentChannelId
  };
  return props;
};

@connect(mapStateToProps)
@reduxForm({ form: 'newMessage' })
class NewMessageForm extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    currentChannelId: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    sendMessage: PropTypes.func.isRequired
  };

  send = ({ text }) => {
    const { username, currentChannelId, sendMessage, reset } = this.props;

    const data = {
      attributes: {
        username,
        text
      }
    };

    return sendMessage(data, currentChannelId, reset);
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <Form className="mb-3" onSubmit={handleSubmit(this.send)}>
        <InputGroup>
          <Field
            className="form-control"
            name="text"
            type="text"
            component="input"
            required
          />
          <InputGroupAddon addonType="append">
            <Button color="primary" disabled={pristine || submitting}>
              Send
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    );
  }
}

export default NewMessageForm;
