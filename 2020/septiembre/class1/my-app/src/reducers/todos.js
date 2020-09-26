

const idx = () => new Date().getTime();

const Todo = (initialState = {}, action) => {
  switch(action.type) {
    case 'ADD':
      return {
        ...action.payload,
        complete: false,
        added: new Date(),
        id: idx(),
      };
    case 'TOGGLE':
      if (action.payload.id === initialState.id) {
        return {
          ...initialState,
          complete: !initialState.complete,
        };
      }
      return initialState;
    default:
      return initialState;
  }
}

const Todos = (initialState = [], action) => {
    switch(action.type) {
      case 'ADD':
        return [...initialState, Todo(null, action)];
      case 'TOGGLE':
        return initialState.map(state => Todo(state, action));
      default:
        return initialState;
    }
};

export default Todos;
