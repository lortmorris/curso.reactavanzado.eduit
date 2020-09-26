

export const addNewTodo = name => ({
  type: 'TODOS_ADD',
  payload: {
    name,
  }
});

export const toggleTodo = id => ({
  type: 'TODOS_TOGGLE',
  payload: {
    id,
  }
});

export const deleteTodo = id => ({
  type: 'TODOS_DELETE',
  payload: {
    id,
  }
});

export default {
  addNewTodo,
  toggleTodo,
  deleteTodo,
}
