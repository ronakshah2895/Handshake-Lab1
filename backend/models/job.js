module.exports = (sequelize, DataTypes, User) => {
  const Job = sequelize.define('job', {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM('Full-Time', 'Part-Time', 'Intern', 'On-Campus'),
      allowNull: false,
    },
  });
  Job.belongsTo(User, { as: 'creator' });
  return { Job };
};
