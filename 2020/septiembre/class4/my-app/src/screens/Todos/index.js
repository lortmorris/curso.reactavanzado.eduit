import React, {
  useEffect,
  useState,
} from 'react';

import { useSelector } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import TodoAddForm from '../../components/TodoAddForm';
import Screen from '../../components/Screen';

import Actions from '../../actions';
import {
  getTodos,
  saveTodo,
  toggleTodo,
  removeTodo,
} from '../../api/todos';

import {
  fetchusers,
} from '../../api/users';

function Todos() {
  const userData = useSelector((state) => state.Users.userData);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [init, setInit] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getRemoteTodos() {
    console.info('getRemoteTodos');
    try {
      const remoteTodos = await getTodos();
      setTodos(remoteTodos.filter((todo) => todo?.user?._id === userData?._id));
    } catch (err) {
      setError('No se ha podido conectar al servidor');
      console.info('explotod todo: ', err);
    }
  }

  async function addNewTodoHandle(data) {
    const inserted = await saveTodo(data);
    await getRemoteTodos();
    console.info('inserted: ', inserted);
  }

  async function fetchUsers() {
    try {
      setInit(true);
      const data = await fetchusers();
      setUsers(data.docs);
    } catch (err) {
      setError('Error cargando datos');
      console.info('error fetchUsers: ', err);
    }
  }

  function timeout() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 2000);
    });
  }
  async function initScreen() {
    setLoading(true);
    await Promise.all([
      fetchUsers(),
      getRemoteTodos(),
      timeout(),
    ]);
    setLoading(false);
  }
  useEffect(() => {
    console.info('por montar el componente');
    if (!init) {
      setInit(true);
      initScreen();
    }
  }, [init]);

  async function handleToggle(id, completed) {
    try {
      await toggleTodo(id, completed);
      await getRemoteTodos();
    } catch (err) {
      setError('Error cambiando toggle');
    }
  }

  async function handleDelete(_id) {
    try {
      await removeTodo(_id);
      await getRemoteTodos();
    } catch (err) {
      setError('Error eliminando el TODO');
    }
  }

  return (
    <Screen
      title="Todos"
      error={error}
      loading={loading}
    >
      <TodoAddForm
        handle={(name, user) => addNewTodoHandle(Actions.Todos.addNewTodo(name, user).payload)}
        users={users}
      />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            {...todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </Screen>
  );
}

export default Todos;
