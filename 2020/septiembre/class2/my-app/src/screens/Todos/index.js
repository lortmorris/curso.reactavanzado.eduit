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
import {
  getTodos,
  saveTodo,
  toggleTodo,
} from '../../api';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [init, setInit] = useState(false);

  async function getRemoteTodos() {
    console.info('getRemoteTodos');
    try {
      const remoteTodos = await getTodos();
      setTodos(remoteTodos);
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

  useEffect(() => {
    console.info('por montar el componente');
    if (!init) {
      setInit(true);
      getRemoteTodos();
    }
    return () => {
      console.info('desmontando el componente');
    };
  }, [init]);

  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.Todos);

  async function handleToggle(id, completed) {
    try {
      await toggleTodo(id, completed);
      await getRemoteTodos();
    } catch (err) {
      setError('Error cambiando toggle');
    }
    // dispatch(Actions.Todos.toggleTodo(id, completed));
  }

  function handleDelete(id) {
    dispatch(Actions.Todos.deleteTodo(id));
  }

  return (
    <div>
      <h2>TODOS</h2>
      <TodoAddForm
        handle={(name) => addNewTodoHandle(Actions.Todos.addNewTodo(name).payload)}
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
      {error !== '' && (
        <h1>{error}</h1>
      )}
    </div>
  );
}

export default Todos;
