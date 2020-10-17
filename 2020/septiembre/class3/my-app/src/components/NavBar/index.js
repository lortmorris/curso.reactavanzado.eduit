import React from 'react';

import {
  Link,
} from 'react-router-dom';

function NavBar({ props }) {
  console.info('Context: ', props);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
