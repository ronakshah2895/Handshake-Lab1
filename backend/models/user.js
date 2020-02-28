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
    profile_image: {
      type: DataTypes.STRING(255),
      defaultValue: 'images/default_profile_image.jpg',
      allowNull: false,
    },
    objective: {
      type: DataTypes.TEXT(),
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
      allowNull: false,
    },
  }, {
    indexes: [
      { fields: ['userId', 'skill'], unique: true },
    ],
  });
  const userEducation = sequelize.define('user_education', {
    college: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    degree: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    major: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    year_of_passing: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    cgpa: {
      type: DataTypes.FLOAT(),
      allowNull: false,
    },
  });
  const userExperience = sequelize.define('user_experience', {
    company: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATEONLY(),
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY(),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
  });
  User.hasMany(userSkill);
  User.hasMany(userEducation);
  User.hasMany(userExperience);
  return {
    User, userSkill, userEducation, userExperience,
  };
};
