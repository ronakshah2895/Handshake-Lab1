const { User } = require('../models/index');

function loginHandler(req, username, password, done) {
  User.findOne({
    where: {
      email: username,
    },
  }).then((user) => {
    if (!user) return done(null, false, { message: 'Incorrect username or password.' });
    return done(null, user.dataValues);
  });
}

function serializeUser(user, done) {
  done(null, user.id);
}

function deserializeUser(id, done) {
  User.findByPk(id).then((user) => {
    done(null, user.dataValues);
  });
}

function logoutHandler(req, res) {
  req.logout();
  res.send({ res: 'Success' });
}

module.exports = {
  loginHandler, serializeUser, deserializeUser, logoutHandler,
};
