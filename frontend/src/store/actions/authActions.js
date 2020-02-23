import { sendPost, get } from '../../helpers/communicationHelper';

const loginHandler = (error) => ({
  type: error ? 'LOGIN_ERROR' : 'LOGIN',
});

const logoutHandler = () => ({
  type: 'LOGOUT',
});

export const login = (ev) => (dispatch) => {
  sendPost('auth/login', ev.target).then(() => {
    dispatch(loginHandler(false));
  }, () => {
    dispatch(loginHandler(true));
  });
};

export const isLoggedIn = () => (dispatch) => {
  sendPost('auth/logged_in').then((data) => {
    if (data.logged_in) dispatch(loginHandler(false));
  });
};

export const logout = () => (dispatch) => {
  get('auth/logout').then(() => {
    dispatch(logoutHandler());
  });
};
