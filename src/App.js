import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./form/TodoList";
import FormTodo from "./form/AddTodo";
import Cards from "./form/Card";
import axios from "axios";
import SelectTodo from "./form/SelectTodo";

const BASE_URL = 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'

function App() {
  const [value, setValue] = React.useState("");
  const [valueManual, setValueManual] = React.useState("");
  const [posts, setPost] = React.useState(null);
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  React.useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setPost(response?.data);
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!valueManual) return;
    addTodo(valueManual);
    setValue("");
  };

  const handleSubmitAuto = e => {
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

  const editTodo = index => {
    const newTodos = [...todos];
    setValueManual(newTodos[index].text)
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo handleSubmit={handleSubmit} onChange={e => setValueManual(e.target.value)} value={valueManual}/>
        <SelectTodo handleSubmit={handleSubmitAuto} onChange={e => setValue(e.target.value)}>
          {posts?.map((post, index) => (
            <option key={index} value={post.title}>{post.title}</option>
          ))}
        </SelectTodo>
        <div>
          <h1 className="text-center mb-4">On-Going</h1>
          {todos.map((todo, index) => (
            <Cards>
              <TodoList
                text={todo.text}
                key={index}
                index={index}
                todo={todo}
                markTodo={() => markTodo(index)}
                removeTodo={() => removeTodo(index)}
                editTodo={() => editTodo(index)}
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
                </> : <>-</>}
            </Cards>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
