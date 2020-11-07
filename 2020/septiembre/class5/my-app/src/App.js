import React, {
  useEffect,
  useState,
} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import About from './screens/About';
import Users from './screens/Users';
import Todos from './screens/Todos';
import Home from './screens/Home';
import Logout from './screens/Logout';

import NavBar from './components/NavBar';
import store from './store';

import AppProvider from './AppProvider';

function getCurrentUser() {
  try {
    const data = sessionStorage.getItem('userData');
    if (!data) return null;
    const userData = JSON.parse(data);
    store.dispatch({
      type: 'USERS_SET_USERDATA',
      payload: userData,
    });

    store.dispatch({
      type: 'USERS_SET_LOGGED',
      payload: true,
    });
    return userData;
  } catch (err) {
    return null;
  }
}

function App() {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    const log = getCurrentUser();
    setLogged(log);
    console.info('store: ', store.getState());
  }, [])

  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <div>
            <NavBar />
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

              {!logged && (
                <Route path="/">
                  <Home />
                </Route>
              )}

              {logged && (
                <Route path="/logout">
                  <Logout />
                </Route>
              )}
            </Switch>
          </div>
        </Router>
      </AppProvider>
    </Provider>
  );
}

export default App;
