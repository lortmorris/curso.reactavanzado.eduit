
const initialState =  {
  requestError : false
};

const request = (state = initialState, action) => {

  switch(action.type){
      case 'REMOVE_TODOLIST_FAILED':
        return { ...state, requestError: true };
      break;

      default:
      return state;
  }
}

export default request;
