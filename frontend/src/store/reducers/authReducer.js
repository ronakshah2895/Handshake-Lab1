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
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
