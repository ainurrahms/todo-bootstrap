import React from "react";
import { Form } from 'react-bootstrap';
import Buttons from '../components/Buttons';


function FormTodo(props) {

  return (
    <Form onSubmit={props.handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Todo</b></Form.Label>
      <Form.Control type="text" className="input" value={props.value} onChange={props.onChange} placeholder="Add new todo" />
    </Form.Group>
    <Buttons variant="primary mb-3" type="submit" text="submit" />
  </Form>
  );
}

export default FormTodo;