const express = require('express');

const app = express();
const {
  addSkill, removeSkill, getProfile, updatePersonalInfo, addProfileImage, addEducation,
} = require('../../actions/user/profile');

app.post('/get_profile', getProfile);
app.post('/add_skill', addSkill);
app.post('/remove_skill', removeSkill);
app.post('/update_personal_info', updatePersonalInfo);
app.post('/add_profile_image', addProfileImage);
app.post('/add_education', addEducation);

module.exports = app;
