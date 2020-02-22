const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
const {
  loginHandler, serializeUser, deserializeUser, logoutHandler,
} = require('../actions/auth');

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
}, loginHandler));
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.send({ status: 'Success' });
});

app.get('/logout', logoutHandler);

module.exports = app;
