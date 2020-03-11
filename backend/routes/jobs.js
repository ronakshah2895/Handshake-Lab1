const express = require('express');

const app = express();
const jobActions = require('../actions/jobs');

app.post('/post_job', jobActions.postJob);
app.post('/get_jobs', jobActions.getJobs);
app.post('/apply_job', jobActions.applyJob);

module.exports = app;
