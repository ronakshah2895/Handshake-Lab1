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
  const jobApplication = sequelize.define('job_application', {
    resume: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Pending', 'Reviewed', 'Declined'),
      allowNull: false,
    },
  });
  jobApplication.belongsTo(User, { as: 'applicant' });
  Job.belongsTo(User, { as: 'creator' });
  Job.hasMany(jobApplication);
  return { Job, jobApplication };
};
