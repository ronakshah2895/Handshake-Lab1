import { sendPost } from '../../helpers/communicationHelper';

const loginHandler = (error) => ({
  type: error ? 'LOGIN_ERROR' : 'LOGIN',
});

export const login = (ev) => (dispatch) => {
  sendPost('auth/login', ev.target).then(() => {
    dispatch(loginHandler(false));
  }, () => {
    dispatch(loginHandler(true));
  });
};

export const logout = () => ({
  type: 'LOGOUT',
});
