const { literal } = require('sequelize');
const { User, Event, eventRegistration } = require('../models/index');

function createEvent(req, res) {
  Event.create({
    ...req.body,
    creatorId: req.user.id,
  }).then((event) => {
    const {
      name, location, time, description,
    } = event;
    res.send({
      name,
      location,
      time,
      description,
      creator: { name: req.user.name, email: req.user.email },
    });
  });
}

function getEvents(req, res) {
  let filterObj;
  if (req.user.is_company) filterObj = { where: { creatorId: req.user.id } };
  else filterObj = { where: literal('event_registrations.id IS NULL') };
  Event.findAll({
    ...filterObj,
    attributes: ['id', 'name', 'location', 'time', 'description'],
    include: [{
      model: User,
      as: 'creator',
      attributes: ['name', 'email'],
    }, {
      model: eventRegistration,
      where: {
        participantId: req.user.id,
      },
      attributes: [],
      required: false,
    }],
    order: [['time', 'DESC']],
  }).then((jobs) => {
    res.send(jobs);
  });
}

function registerEvent(req, res) {
  eventRegistration.create({
    eventId: req.body.eventId,
    participantId: req.user.id,
  }).then(() => {
    res.send(req.body.eventId);
  });
}

module.exports = {
  createEvent, getEvents, registerEvent,
};
