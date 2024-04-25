import React from 'react';

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <li style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => toggleTodo(index)}>Toggle</button>
      <button onClick={() => removeTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
