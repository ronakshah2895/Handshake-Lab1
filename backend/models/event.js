module.exports = (sequelize, DataTypes, User) => {
  const Event = sequelize.define('event', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    time: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    eligibility: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
  });
  const eventRegistration = sequelize.define('event_registration');
  eventRegistration.belongsTo(User, { as: 'participant' });
  Event.belongsTo(User, { as: 'creator' });
  Event.hasMany(eventRegistration);
  return { Event, eventRegistration };
};
