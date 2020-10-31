export const addNewTodo = (name, user) => ({
  type: 'TODOS_ADD',
  payload: {
    name,
    user,
    completed: false,
  },
});

export const toggleTodo = (id) => ({
  type: 'TODOS_TOGGLE',
  payload: {
    id,
  },
});

export const deleteTodo = (id) => ({
  type: 'TODOS_DELETE',
  payload: {
    id,
  },
});

export default {
  addNewTodo,
  toggleTodo,
  deleteTodo,
};
