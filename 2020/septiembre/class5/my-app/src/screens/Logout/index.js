import React, {
  useEffect,
  useState,
} from 'react';

import {
  Redirect,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

function LogoutScreen() {
  const dispatch = useDispatch();
  const [logged, setLogged] = useState(true);

  useEffect(() => {
    sessionStorage.removeItem('userData');
    dispatch({
      type: 'USERS_SET_USERDATA',
      payload: null,
    });

    dispatch({
      type: 'USERS_SET_LOGGED',
      payload: false,
    });
    setLogged(false);
    console.info('todo desmontado');
  }, []);

  return (
    <div>
      {!logged && (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      )}
    </div>
  );
}

export default LogoutScreen;
