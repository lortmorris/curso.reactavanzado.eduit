import React from 'react';

import {
  Link,
} from 'react-router-dom';

import { AppConsumer } from '../../AppContext';

function NavBar() {
  return (
    <AppConsumer>
      {
        (context) => (
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {context.logged && (
                <li>
                  <Link to="/users">Users</Link>
                </li>
              )}
              {context.logged && (
                <li>
                  <Link to="/todos">Todos</Link>
                </li>
              )}
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        )
      }
    </AppConsumer>
  );
}

export default NavBar;
