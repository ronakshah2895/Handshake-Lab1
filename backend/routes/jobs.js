const express = require('express');

const app = express();
const jobActions = require('../actions/jobs');

app.post('/post_job', jobActions.postJob);

module.exports = app;
