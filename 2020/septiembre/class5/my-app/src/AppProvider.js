import React, {
  useState,
  useEffect,
} from 'react';

import { useSelector } from 'react-redux';

import { AppProvider } from './AppContext';

import {
  fetchusers,
} from './api/users';

import {
  getTodos,
} from './api/todos';

function AppProviderContext({ children }) {
  const Users = useSelector((state) => state.Users);
  const userData = useSelector((state) => state.Users?.userData);
  const [intervalId, setInvertalId] = useState();
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    theme: 'dark',
    user: null,
    logged: false,
  });

  async function fetchTodos() {
    try {
      const remoteTodos = await getTodos();
      setTodos(remoteTodos.filter((todo) => todo?.user?._id === userData?._id));
    } catch (err) {
      console.info('explotod todo: ', err);
    }
  }

  async function fetchUsers() {
    try {
      const usersData = await fetchusers();
      setUsers(usersData.docs);
    } catch (err) {
      console.info('error fetchUsers: ', err);
    }
  }

  useEffect(() => {
    setData({
      ...data,
      user: Users.userData,
      logged: Users.logged,
    });
  }, [Users]);

  useEffect(() => {
    if (intervalId) return undefined;
    console.info('efect interval');
    const id = setInterval(async () => {
      await Promise.all([
        fetchUsers(),
        fetchTodos(),
      ]);
    }, 1000);
    setInvertalId(id);

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <AppProvider
      value={{
        ...data,
        todos,
        users,
        fetchTodos,
      }}
    >
      {children}
    </AppProvider>
  );
}

export default AppProviderContext;
