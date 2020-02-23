import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as authActions from '../../store/actions/authActions';
import './Login.css';

function Login(props) {
  const { loginError, login } = props;
  return (
    <div className="text-center vertical-align">
      <form onSubmit={login} className="form-signin">
        <img className="mb-4" alt="" src="/images/short-logo.png" width="72" height="72" />
        <h3 className="mb-3 font-weight-normal">Sign In</h3>
        { loginError && (
          <div className="alert alert-danger" role="alert">
            Invalid Username/Password
          </div>
        ) }
        <input type="email" name="username" id="inputEmail" className="form-control" placeholder="Email Address" required />
        <input type="password" name="password" id="inputPass" className="form-control" placeholder="Password" required />
        <div className="text-right">
          <Link to="/register">Register!</Link>
        </div>
        <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign In</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loginError: state.authReducer.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  login: (ev) => {
    ev.preventDefault();
    dispatch(authActions.login(ev));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
