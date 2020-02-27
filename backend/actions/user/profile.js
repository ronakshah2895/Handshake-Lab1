const { v1: uuidv1 } = require('uuid');
const fs = require('fs');
const { User, userSkill, userEducation } = require('../../models/index');

function addSkill(req, res) {
  userSkill.create({
    skill: req.body.skill,
    userId: req.user.id,
  }).then(() => {
    res.send(req.body.skill);
  }, () => {
    res.status(400).send({ res: 'Failed' });
  });
}

function removeSkill(req, res) {
  userSkill.destroy({
    where: {
      skill: req.body.skill,
      userId: req.user.id,
    },
  }).then(() => {
    res.send(req.body.skill);
  });
}

function getProfile(req, res) {
  const email = req.body && req.body.email ? req.body.email : req.user.email;
  User.findOne({
    where: { email },
    attributes: ['name', 'email', 'dob', 'location', 'phone', 'profile_image'],
    include: [{
      model: userSkill,
      attributes: ['skill'],
    }, {
      model: userEducation,
      attributes: ['id', 'college', 'location', 'degree', 'major', 'year_of_passing', 'cgpa'],
    }],
  }).then((user) => {
    const userData = user.dataValues;
    const skillsArr = [];
    userData.user_skills.forEach((skill) => {
      skillsArr.push(skill.dataValues.skill);
    });
    userData.skills = skillsArr;
    userData.educations = userData.user_educations;
    delete userData.user_skills;
    delete userData.user_educations;
    res.send(userData);
  });
}

function updatePersonalInfo(req, res) {
  const updateObj = {};
  Object.entries(req.body).forEach(([key, value]) => {
    if (value) updateObj[key] = value;
    else updateObj[key] = null;
  });
  User.update(updateObj, {
    where: { id: req.user.id },
  }).then(() => {
    res.send(updateObj);
  });
}

function addProfileImage(req, res) {
  const profileImage = req.files[0];
  if (!fs.existsSync('public/images/profile_images')) {
    fs.mkdirSync('public/images/profile_images');
  }
  const fileExt = profileImage.originalname.substring(profileImage.originalname.lastIndexOf('.'));
  const path = `images/profile_images/${uuidv1() + fileExt}`;
  fs.writeFile(`public/${path}`, profileImage.buffer, () => {
    User.update({ profile_image: path }, {
      where: { id: req.user.id },
    }).then(() => {
      if (!req.user.profile_image.includes('default_profile_image.jpg')) {
        fs.unlinkSync(`public/${req.user.profile_image}`);
      }
      res.send(path);
    });
  });
}

function addEducation(req, res) {
  userEducation.create({
    ...req.body,
    userId: req.user.id,
  }).then(() => {
    res.send(req.body);
  });
}

module.exports = {
  addSkill, removeSkill, getProfile, updatePersonalInfo, addProfileImage, addEducation,
};
