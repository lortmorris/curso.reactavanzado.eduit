import React, {
  useState,
  useContext,
} from 'react';

import TodoItem from '../../components/TodoItem';
import TodoAddForm from '../../components/TodoAddForm';
import Screen from '../../components/Screen';

import Actions from '../../actions';
import {
  saveTodo,
  toggleTodo,
  removeTodo,
} from '../../api/todos';

import AppContext from '../../AppContext';

function Todos() {
  const context = useContext(AppContext);
  const [error, setError] = useState('');

  const {
    todos,
    users,
    fetchTodos,
  } = context;

  async function addNewTodoHandle(data) {
    const inserted = await saveTodo(data);
    fetchTodos();
    console.info('inserted: ', inserted);
  }

  async function handleToggle(id, completed) {
    try {
      await toggleTodo(id, completed);
    } catch (err) {
      setError('Error cambiando toggle');
    }
  }

  async function handleDelete(_id) {
    try {
      await removeTodo(_id);
    } catch (err) {
      setError('Error eliminando el TODO');
    }
  }

  return (
    <Screen
      title="Todos"
      error={error}
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
