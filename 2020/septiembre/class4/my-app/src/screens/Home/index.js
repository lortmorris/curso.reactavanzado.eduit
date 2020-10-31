import React, {
  useState,
} from 'react';

import { useDispatch } from 'react-redux';

import { AppConsumer } from '../../AppContext';
import Screen from '../../components/Screen';

import LoginForm from '../../components/LoginForm';

import { Login } from '../../api/users';

function Home() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  async function LoginHandle(username, password) {
    try {
      const logged = await Login(username, password);
      dispatch({
        type: 'USERS_SET_USERDATA',
        payload: logged,
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
    <AppConsumer>
      {
        (context) => (
          <Screen
            title={context.logged ? `Welcome ${context.user.firstName}` : 'Login'}
            error={error}
          >
            {context.logged && (
              <h1>
                {}
              </h1>
            )}
            {!context.logged && (
              <LoginForm submitHandle={LoginHandle} />
            )}
          </Screen>
        )
      }
    </AppConsumer>
  );
}

export default Home;
