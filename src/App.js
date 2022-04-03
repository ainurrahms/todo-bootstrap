import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./form/TodoList";
import FormTodo from "./form/AddTodo";
import Cards from "./form/Card";

function App() {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo handleSubmit={handleSubmit} onChange={e => setValue(e.target.value)} value={value}/>
        <div>
          {todos.map((todo, index) => (
            <Cards>
              <TodoList
                text={todo.text}
                key={index}
                index={index}
                todo={todo}
                markTodo={() => markTodo(index)}
                removeTodo={() => removeTodo(index)}
              />
            </Cards>
          ))}
          <h1 className="text-center mb-4">Done</h1>
          {todos.map((todo, index) => (
            <Cards>
                {todo.isDone ? 
                <>
                  <TodoList
                    text={todo.text}
                    style={{ textDecoration: todo.isDone ? "line-through" : "" }}
                    key={index}
                    index={index}
                    todo={todo}
                    isDone={todo.isDone}
                  />
                </> : <></>}
            </Cards>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
