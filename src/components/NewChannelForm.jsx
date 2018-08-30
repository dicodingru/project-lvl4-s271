import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Form, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import connect from '../connect';

@connect()
@reduxForm({ form: 'newChannel' })
class NewChannelForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    createChannel: PropTypes.func.isRequired
  };

  add = ({ name }) => {
    const { createChannel, reset } = this.props;
    const data = {
      attributes: {
        name
      }
    };
    return createChannel(data, reset);
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.add)}>
        <InputGroup className="mb-3">
          <Field
            className="form-control"
            name="name"
            type="text"
            component="input"
            required
          />
          <InputGroupAddon addonType="append">
            <Button color="success" disabled={pristine || submitting}>
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    );
  }
}

export default NewChannelForm;
