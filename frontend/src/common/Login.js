import React from 'react';
import { connect } from 'react-redux';
import * as userActions from '../store/actions/userActions';
import './Login.css';

function Login(props) {
  const { loggedIn, login } = props;
  return (
    <div className="text-center vertical-align">
      <form className="form-signin">
        <img className="mb-4" alt="" src="/images/short-logo.png" width="72" height="72" />
        <h3 className="mb-3 font-weight-normal">Sign In</h3>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email Address" required />
        <input type="password" id="inputPass" className="form-control" placeholder="Password" required />
        <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign In</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(userActions.login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
