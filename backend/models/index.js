const Sequelize = require('sequelize');

const {
  MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB,
} = process.env;

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: 'mysql',
});
const userModels = require('./user')(sequelize, Sequelize);
const jobModels = require('./job')(sequelize, Sequelize, userModels.User);
const eventModels = require('./event')(sequelize, Sequelize, userModels.User);

sequelize.sync();

module.exports = { ...userModels, ...jobModels, ...eventModels };
