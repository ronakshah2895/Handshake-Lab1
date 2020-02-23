module.exports = (sequelize, DataTypes) => sequelize.define('user', {
  name: {
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
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  is_company: {
    type: DataTypes.BOOLEAN(),
    allowNull: false,
  },
});
