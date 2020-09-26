export const addTodoList = (title) => ({
    type: 'ADD_TODO_LIST',
    title,
  });


export const addTodo = (todosListId = 0, title) => ({
  type: 'ADD_TODO',
  todosListId,
  title,
});

export const toggleTodo = (todosListId = 0, id) => ({
  type: 'TOGGLE_TODO',
  todosListId,
  id,
});

export const initialState = state => ({
  state,
  type: 'INITIAL_STATE',
});

export const removeTodoList = id => ({
  type: 'REMOVE_TODO_LIST',
  id,
});

export const removeTodo = (todosListId, id) => ({
  type: 'REMOVE_TODO',
  id,
  todosListId,
});
