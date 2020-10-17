import React from 'react';

function TodoItem({
  name,
  completed,
  _id,
  handleToggle,
  handleDelete,
}) {
  return (
    <li
      style={{
        color: completed ? 'blue' : 'red',
      }}
    >
      <span onClick={() => handleToggle(_id, !completed)}>{name}</span>
      <button onClick={() => handleDelete(_id)}>
        [X]
      </button>
    </li>
  );
}

export default TodoItem;
