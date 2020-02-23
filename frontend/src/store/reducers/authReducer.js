const initialState = {
  loggedIn: false,
  loginError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
        loginError: false,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loginError: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
