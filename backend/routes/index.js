const express = require('express');

const authRoutes = require('./auth');
const profileRoutes = require('./user/profile');

const app = express();

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

module.exports = app;
