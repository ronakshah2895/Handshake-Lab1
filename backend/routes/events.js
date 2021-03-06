const express = require('express');

const app = express();
const eventActions = require('../actions/events');

app.post('/create_event', eventActions.createEvent);
app.post('/get_events', eventActions.getEvents);
app.post('/register_event', eventActions.registerEvent);
app.post('/get_registrations', eventActions.getRegistrations);

module.exports = app;
