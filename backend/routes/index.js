const express = require('express');

const app = express();

app.use('/auth', require('./auth'));
app.use('/profile', require('./profile'));
app.use('/students', require('./students'));
app.use('/jobs', require('./jobs'));

module.exports = app;
