const initialState = {
  loggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
