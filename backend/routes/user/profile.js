const express = require('express');

const app = express();
const {
  addSkill, removeSkill, getProfile,
} = require('../../actions/user/profile');

app.post('/get_profile', getProfile);
app.post('/add_skill', addSkill);
app.post('/remove_skill', removeSkill);

module.exports = app;
