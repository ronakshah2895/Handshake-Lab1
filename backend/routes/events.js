const express = require('express');

const app = express();
const eventActions = require('../actions/events');

app.post('/create_event', eventActions.createEvent);
app.post('/get_events', eventActions.getEvents);

module.exports = app;
