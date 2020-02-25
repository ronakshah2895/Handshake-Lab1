import { sendPost, get } from '../../helpers/communicationHelper';

export const login = (ev) => (dispatch) => {
  sendPost('auth/login', ev.target).then(() => {
    dispatch({ type: 'LOGIN' });
  }, () => {
    dispatch({ type: 'LOGIN_ERROR' });
  });
};

export const register = (ev, history) => (dispatch) => {
  sendPost('auth/register', ev.target).then(() => {
    dispatch({ type: 'REGISTER' });
    history.push('/login');
  }, () => {
    dispatch({ type: 'REGISTER_ERROR' });
  });
};

export const toggleCompanyRadio = () => ({
  type: 'COMPANY_TOGGLE',
});

export const isLoggedIn = () => (dispatch) => {
  sendPost('auth/logged_in').then((data) => {
    if (data.logged_in) dispatch({ type: 'LOGIN' });
  });
};

export const logout = () => (dispatch) => {
  get('auth/logout').then(() => {
    dispatch({ type: 'LOGOUT' });
  });
};
