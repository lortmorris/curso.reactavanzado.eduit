import React from 'react';
import Todo from '../Todo/index.jsx';

const Todos = ({ todos, dispatch, todosListId, updateHandler }) => {
  console.log("Todos called: ", todos);
  return (
    <ul className="todos-box">
        {todos.map(todo => (
            <Todo
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            dispatch={dispatch}
            id={todo.id}
            todosListId={todosListId}
            updateHandler={updateHandler}
            />
        ))}
    </ul>
  );
}

export default Todos;
