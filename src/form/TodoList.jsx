import React from 'react';
import Buttons from '../components/Buttons';
import '../App.css';

function TodoList(props) {
  return (
    <div
      className="todo"
    >
      <span style={props.style}>{props.text}</span>
        <div>
          {props.isDone ? <></>:
            <>
              <Buttons variant="outline-success" onClick={props.markTodo} text="Done"/>{' '}
              <Buttons variant="outline-danger" onClick={props.removeTodo} text="Delete"/>{' '}
              <Buttons variant="outline-warning" onClick={props.editTodo} text="Edit"/>
            </>
          }
        </div>
    </div>
  );
}

export default TodoList;