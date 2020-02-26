module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.CHAR(60),
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY(),
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER(),
      allowNull: true,
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
  const userSkill = sequelize.define('user_skill', {
    skill: {
      type: DataTypes.STRING(255),
    },
  }, {
    indexes: [
      { fields: ['userId', 'skill'], unique: true },
    ],
  });
  User.hasMany(userSkill);
  return { User, userSkill };
};
