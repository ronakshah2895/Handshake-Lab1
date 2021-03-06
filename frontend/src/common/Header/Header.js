import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import * as authActions from '../../store/actions/authActions';

function Header(props) {
  const { isCompany, loggedIn, logout } = props;
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src="/images/logo.svg" width="32" height="32" alt="" className="d-inline-block align-top" />
        <span className="ml-2">Handshake</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        { loggedIn && (
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
            </li>
            { !isCompany && (
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/applications">Applications</NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/students">Students</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/events">Events</NavLink>
            </li>
            { !isCompany && (
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/registrations">Registrations</NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/profile">Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact onClick={logout} className="nav-link" activeClassName="active" to="/">Logout</NavLink>
            </li>
          </ul>
        )}
        { !loggedIn && (
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/login">Login</NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.authReducer.loggedIn,
  isCompany: state.authReducer.is_company,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(authActions.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
