import React from 'react';
import Todo from '../Todo/index.jsx';

const Todos = ({ todos, todosListId, removeTodo, toggleTodo}) => (
  <ul className="todos-box">
    {todos.map(todo => (
      <Todo
        key={todo.id}
        title={todo.title}
        completed={todo.completed}
        id={todo.id}
        todosListId={todosListId}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        />
    ))}
  </ul>
);


export default Todos;
