const express = require('express');

const app = express();

app.use('/auth', require('./auth'));
app.use('/profile', require('./user/profile'));

module.exports = app;
