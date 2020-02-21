const loginHandler = () => ({
  type: 'LOGIN',
});

export const login = () => (dispatch) => {
  setTimeout(() => {
    dispatch(loginHandler());
  }, 3000);
};

export const logout = () => ({
  type: 'LOGOUT',
});
