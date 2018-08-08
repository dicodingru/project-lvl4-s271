import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
`;

const Form = styled.form``;

const Input = styled.input`
  width: 90%;
`;

const Button = styled.button`
  width: 10%;
`;

const NewMessageForm = () => (
  <Div>
    <Form>
      <Input type="text" />
      <Button type="submit">Send</Button>
    </Form>
  </Div>
);

export default NewMessageForm;
