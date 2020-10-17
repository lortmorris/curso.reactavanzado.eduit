import React, {
  useContext,
} from 'react';

import {
  Link,
} from 'react-router-dom';

function NavBar() {
  const theme = useContext('ThemeContext');
  console.info('Context: ', theme);
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
