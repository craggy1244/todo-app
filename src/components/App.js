import './App.css';
import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name, complete: false}];
    }); 
    todoNameRef.current.value = '';
    console.log({ todos });
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  return (
    <>
      <Header title={"Todo App"} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;