const express = require('express');

module.exports = express();
const app = module.exports;

app.use('/auth', require('./auth'));
