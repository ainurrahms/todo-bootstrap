import React from "react";
import { Form } from 'react-bootstrap';
import Buttons from '../components/Buttons';


function SelectTodo(props) {

  return (
    <Form onSubmit={props.handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add recommendation todo</b></Form.Label>
        <Form.Control as="select" aria-label="Default select example" onChange={props.onChange}>
          {props.children}
        </Form.Control>
    </Form.Group>
    <Buttons variant="primary mb-3 mt-2" type="submit" text="submit" />
  </Form>
  );
}

export default SelectTodo;