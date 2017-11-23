let id = 0;

const todo = (state={}, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return {
        title: action.title,
        id: new Date().getTime(),
        completed: false,
        added: new Date()
      };
    break;

    case 'REMOVE_TODO':
    console.log(' REMOVE ?TODO_ ', action);
      return state.id !== action.id;
    break;

    case 'TOGGLE_TODO':
      if(state.id === action.id) return Object.assign({}, state, {completed: !state.completed});
      else return state;
    break;
    default:
    return state;

  }
}
const todosList = (state={}, action) => {
  switch(action.type){
    case 'ADD_TODO_LIST':
      return {
        id: new Date().getTime(),
        title: action.title,
        added: new Date(),
        completed: false,
        todos: []
      };
    break;

    case 'REMOVE_TODO_LIST':
      return state.id !== action.id;
    break;
    default:
    return state;
    break;
  }
}

const todos = (state=[], action) => {
  console.log('reducer called: ', state, action);
  switch(action.type){
      case 'INITIAL_STATE':
        return action.state;

      case 'ADD_TODO_LIST':
        return [...state, todosList({}, action)];
      break;

      case 'REMOVE_TODO_LIST':
        return state.filter(list => todosList(list, action));
      break;

      case 'ADD_TODO':
        return state.map(list => {
          if(list.id === action.todosListId) {
            return Object.assign({}, list, {todos: [...list.todos, todo({}, action) ]} );
          }
          else return list;
        });
      break;

      case 'REMOVE_TODO':
      return state.map(list => {
        if(list.id === action.todosListId) {
          return Object.assign({}, list, {todos: list.todos.filter(t => todo(t, action))} );
        }
        else return list;
      });
      break;

      case 'TOGGLE_TODO':
      return state.map(list => {
        if(list.id === action.todosListId) {
          return Object.assign({}, list, {todos: list.todos.map(t => todo(t, action))} );
        }
        else return list;
      });
      break;

      default:
      return state;
  }
}

export default todos;
