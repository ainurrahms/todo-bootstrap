import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';

function Cards(props) {
  return (
    <Card>
      <Card.Body>
        {props.children}
      </Card.Body>
    </Card>
  );
}

export default Cards;