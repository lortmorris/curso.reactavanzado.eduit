const Todo = (initialState = {}, action) => {
  switch (action.type) {
  case 'TODOS_ADD':
    return {
      ...action.payload,
    };
  case 'TODOS_TOGGLE':
    if (action.payload._id === initialState._id) {
      return {
        ...initialState,
        completed: !initialState.completed,
      };
    }
    return initialState;
  default:
    return initialState;
  }
};

const Todos = (initialState = [], action) => {
  switch (action.type) {
  case 'TODOS_ADD':
    return [...initialState, Todo(null, action)];

  case 'TODOS_DELETE':
    return initialState.filter((todo) => todo._id !== action.payload._id);

  case 'TODOS_TOGGLE':
    return initialState.map((state) => Todo(state, action));
  default:
    return initialState;
  }
};

export default Todos;
