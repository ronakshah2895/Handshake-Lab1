const Sequelize = require('sequelize');

const sequelize = new Sequelize('HandshakeLab1', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});
const User = require('./user')(sequelize, Sequelize);

sequelize.sync({ alter: true });

module.exports = { User };
