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
import companyDashboard from './company/Dashboard/Dashboard';
import userDashboard from './user/Dashboard/Dashboard';
import userApplications from './user/Applications/Applications';
import Login from './common/Login/Login';
import Register from './common/Register/Register';
import Profile from './common/Profile/Profile';
import Students from './common/Students/Students';
import companyEvents from './company/Events/Events';
import userEvents from './user/Events/Events';
import * as authActions from './store/actions/authActions';

class App extends React.Component {
  componentDidMount() {
    const { loggedIn, isLoggedIn } = this.props;
    if (!loggedIn) isLoggedIn();
  }

  render() {
    const { loggedIn, isCompany } = this.props;
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
            { isCompany && [
              <Route exact key="1" path="/" component={companyDashboard} />,
              <Route exact key="2" path="/events" component={companyEvents} />,
            ]}
            { !isCompany && [
              <Route exact key="1" path="/" component={userDashboard} />,
              <Route exact key="2" path="/applications" component={userApplications} />,
              <Route exact key="3" path="/events" component={userEvents} />,
            ]}
            <Route exact path="/students" component={Students} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/:email" component={Profile} />
            <Redirect from="/" to="/" />
          </Switch>
        )}
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.authReducer.loggedIn,
  isCompany: state.authReducer.is_company,
});

const mapDispatchToProps = (dispatch) => ({
  isLoggedIn: () => {
    dispatch(authActions.isLoggedIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
