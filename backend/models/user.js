module.exports = (sequelize, DataTypes) => sequelize.define('user', {
  first_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  password: {
    type: DataTypes.CHAR(60),
    allowNull: false,
  },
  college: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});
