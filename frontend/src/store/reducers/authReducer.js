const initialState = {
  loggedIn: false,
  loginError: false,
  registerError: false,
  isCompany: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
        loginError: false,
        registerError: false,
      };
    case 'REGISTER':
      return {
        ...state,
        loginError: false,
        registerError: false,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loginError: true,
      };
    case 'REGISTER_ERROR':
      return {
        ...state,
        registerError: true,
      };
    case 'COMPANY_TOGGLE':
      return {
        ...state,
        isCompany: !state.isCompany,
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
