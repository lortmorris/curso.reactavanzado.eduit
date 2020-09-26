import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Actions from '../../actions';

import TodoItem from '../../components/TodoItem';
import TodoAddForm from '../../components/TodoAddForm';

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.Todos);

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
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
