import React from 'react';


function TodoItem({ name, complete, id, handleToggle }) {
  return (
    <li style={{
      color: complete ? 'blue' : 'red',
      }}
      onClick={() => handleToggle(id)}
    >
      {name}
    </li>
  )
}

export default TodoItem;
