import React from 'react'

export default function Todo( { todo, toggleTodo } ) {
  
  const handleToggleTodo = (e) => {
    toggleTodo(todo.id);
  };
  
  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={handleToggleTodo} />
            <span style={ {textDecoration: todo.complete ?  "line-through" : "none" } }>{todo.name}</span>
        </label>
    </div>
  )
}
