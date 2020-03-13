const express = require('express');

const app = express();
const studentActions = require('../actions/students');

app.post('/get_students', studentActions.getStudents);

module.exports = app;
