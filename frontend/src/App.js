import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './common/Header/Header';
import Home from './common/Landing/Landing';
import Login from './common/Login/Login';
import Register from './common/Register/Register';
import Profile from './common/Profile/Profile';
import Students from './common/Students/Students';
import * as authActions from './store/actions/authActions';

class App extends React.Component {
  componentDidMount() {
    const { loggedIn, isLoggedIn } = this.props;
    if (!loggedIn) isLoggedIn();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <Router>
        <Header />

        { !loggedIn && (
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Home} />
            <Redirect from="/" to="/" />
          </Switch>
        )}

        { loggedIn && (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/profile" component={Profile} />
            <Redirect from="/" to="/" />
          </Switch>
        )}
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.authReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  isLoggedIn: () => {
    dispatch(authActions.isLoggedIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
