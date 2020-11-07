import React, {
  useEffect,
  useState,
} from 'react';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import NavBar from './components/NavBar';
import store from './store';

import AppProvider from './AppProvider';

import Routes from './routes';

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
  useEffect(() => {
    getCurrentUser();
  });

  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <div>
            <NavBar />
            <Routes />
          </div>
        </Router>
      </AppProvider>
    </Provider>
  );
}

export default App;
