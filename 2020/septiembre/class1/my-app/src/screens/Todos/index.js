import React from 'react';
import TodoItem from '../../components/TodoItem';

const data = [
  { name : 'aprender redux', id: 1 },
  { name : 'aprender effect', id: 2 },
];

function Todos() {
  return (
    <div>
      <h2>TODOS</h2>
      <input type="text" name="todoname" id="todoname" value="" />
      <ul>
        {data.map(todo => (
          <TodoItem
            key={todo.id}
            name={todo.name}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
