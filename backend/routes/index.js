const express = require('express');

const app = express();

app.use('/auth', require('./auth'));
app.use('/profile', require('./profile'));

module.exports = app;
