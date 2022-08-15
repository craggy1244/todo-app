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

  const clearComplete = (e) => {
    const newTodos = [...todos.filter(todo => !todo.complete)];
    setTodos(newTodos);
  };

  const onTodoNameFocus = (e) => {
    e.target.placeholder = "";
  };

  const onTodoNameBlur = (e) => {
    e.target.placeholder = "Enter a todo";
  };

  return (
    <>
      <Header title={"Todo App"} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" placeholder="Enter a todo" onFocus={onTodoNameFocus} onBlur={onTodoNameBlur} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={clearComplete}>Clear Complete</button>
      <div className="left-todo">{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;