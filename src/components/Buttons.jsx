import React from "react";
import { Button } from 'react-bootstrap';

function Buttons(props){
  return(
    <>
      <Button variant={props.variant} onClick={props.onClick} type={props.type}>{props.text}</Button>
    </>
  );
}

export default Buttons;