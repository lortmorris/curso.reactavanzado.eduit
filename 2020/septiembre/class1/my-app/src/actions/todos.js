

export const addNewTodo = name => ({
  type: 'TODOS_ADD',
  payload: {
    name,
  }
});

export default {
  addNewTodo,
}
