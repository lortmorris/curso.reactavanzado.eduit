import React from 'react';


function TodoItem({
  name,
  complete,
  id,
  handleToggle,
  handleDelete
}) {
  return (
    <li style={{
      color: complete ? 'blue' : 'red',
      }}
      onClick={() => handleToggle(id)}
    >
      {name} <button onClick={() => handleDelete(id)}>[X]</button>
    </li>
  )
}

export default TodoItem;
