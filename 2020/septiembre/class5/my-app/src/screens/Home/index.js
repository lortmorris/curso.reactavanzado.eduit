import React, {
  useState,
  useContext,
} from 'react';

import {
  useDispatch,
} from 'react-redux';

import AppContext from '../../AppContext';
import Screen from '../../components/Screen';

import LoginForm from '../../components/LoginForm';

import { Login } from '../../api/users';

function Home() {
  const context = useContext(AppContext);
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const {
    user,
    logged,
  } = context;

  async function LoginHandle(username, password) {
    try {
      const loggedData = await Login(username, password);
      sessionStorage.setItem('userData', JSON.stringify(loggedData));

      dispatch({
        type: 'USERS_SET_USERDATA',
        payload: loggedData,
      });

      dispatch({
        type: 'USERS_SET_LOGGED',
        payload: true,
      });
    } catch (err) {
      console.info('err: ', err);
      setError('Error iniciando session');
    }
  }

  return (
    <Screen
      title={logged ? `Welcome ${user.firstName}` : 'Login'}
      error={error}
    >
      {!logged && (
        <LoginForm submitHandle={LoginHandle} />
      )}
    </Screen>
  );
}

export default Home;
