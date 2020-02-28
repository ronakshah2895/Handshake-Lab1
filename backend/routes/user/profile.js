const express = require('express');

const app = express();
const profileActions = require('../../actions/user/profile');

app.post('/get_profile', profileActions.getProfile);
app.post('/add_skill', profileActions.addSkill);
app.post('/remove_skill', profileActions.removeSkill);
app.post('/update_personal_info', profileActions.updatePersonalInfo);
app.post('/add_profile_image', profileActions.addProfileImage);
app.post('/add_education', profileActions.addEducation);
app.post('/remove_education', profileActions.removeEducation);
app.post('/add_experience', profileActions.addExperience);
app.post('/remove_experience', profileActions.removeExperience);
app.post('/edit_objective', profileActions.editObjective);

module.exports = app;
