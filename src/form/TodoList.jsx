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
              <Buttons variant="outline-success" onClick={props.markTodo} text="✓"/>{' '}
              <Buttons variant="outline-danger" onClick={props.removeTodo} text="✕"/>
            </>
          }
        </div>
    </div>
  );
}

export default TodoList;