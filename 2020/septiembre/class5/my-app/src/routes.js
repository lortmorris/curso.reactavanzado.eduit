import React, {
  useContext,
} from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import About from './screens/About';
import Users from './screens/Users';
import Todos from './screens/Todos';
import Home from './screens/Home';
import Logout from './screens/Logout';

import AppContext from './AppContext';

function Routes() {
  const context = useContext(AppContext);
  const {
    logged,
  } = context;
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      {logged && (
        <Route path="/users">
          <Users />
        </Route>
      )}

      {logged && (
        <Route path="/todos">
          <Todos />
        </Route>
      )}

      {logged && (
        <Route path="/logout">
          <Logout />
        </Route>
      )}

      {!logged && (
        <Route path="/">
          <Home />
        </Route>
      )}
    </Switch>
  );
}

export default Routes;
