import React, {
  useEffect,
  useState,
} from 'react';

import {
  // useSelector,
  useDispatch,
} from 'react-redux';

import TodoItem from '../../components/TodoItem';
import TodoAddForm from '../../components/TodoAddForm';

import Actions from '../../actions';
import { getTodos } from '../../api';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  async function getRemoteTodos() {
    try {
      const remoteTodos = await getTodos();
      setTodos(remoteTodos);
    } catch (err) {
      setError('No se ha podido conectar al servidor');
      console.info('explotod todo: ', err);
    }
  }

  useEffect(() => {
    console.info('por montar el componente');
    getRemoteTodos();
    return () => {
      console.info('desmontando el componente');
    };
  });

  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.Todos);

  function handleToggle(id) {
    dispatch(Actions.Todos.toggleTodo(id));
  }

  function handleDelete(id) {
    dispatch(Actions.Todos.deleteTodo(id));
  }

  return (
    <div>
      <h2>TODOS</h2>
      <TodoAddForm
        handle={(name) => dispatch(Actions.Todos.addNewTodo(name))}
      />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      {error !== '' && (
        <h1>{error}</h1>
      )}
    </div>
  );
}

export default Todos;
