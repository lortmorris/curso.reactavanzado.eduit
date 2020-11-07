import React, {
  useContext,
} from 'react';

import {
  Link,
} from 'react-router-dom';

import AppContext from '../../AppContext';

function NavBar() {
  const context = useContext(AppContext);

  const {
    logged,
  } = context;
  return (
    <nav>
      <ul>
        {!logged && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}

        {logged && (
          <li>
            <Link to="/users">Users</Link>
          </li>
        )}
        {logged && (
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        )}
        <li>
          <Link to="/about">About</Link>
        </li>
        {logged && (
          <li>
            <Link to="/logout">Salir</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
