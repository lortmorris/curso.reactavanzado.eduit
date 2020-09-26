import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from './screens/About';
import Users from './screens/Users';
import Todos from './screens/Todos';
import Home from './screens/Home';

import NavBar from './components/NavBar';
import store from './store';

store.dispatch({
  type: 'TODOS_ADD',
  payload: {
    name: 'Aprender redux',
  }
});

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
