const initialState = {
  logged: false,
  userData: null,
};

const Users = (state = initialState, action) => {
  switch (action.type) {
  case 'USERS_SET_LOGGED':
    return {
      ...state,
      logged: action.payload,
    };

  case 'USERS_SET_USERDATA':
    return {
      ...state,
      userData: { ...action.payload },
    };
  default:
    return initialState;
  }
};

export default Users;
