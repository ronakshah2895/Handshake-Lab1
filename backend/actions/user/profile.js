const { User, userSkill } = require('../../models/index');

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
    attributes: ['name', 'email', 'dob', 'location', 'phone'],
    include: [{
      model: userSkill,
      attributes: ['skill'],
    }],
  }).then((user) => {
    const userData = user.dataValues;
    const skillsArr = [];
    userData.user_skills.forEach((skill) => {
      skillsArr.push(skill.dataValues.skill);
    });
    userData.skills = skillsArr;
    delete userData.user_skills;
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

module.exports = {
  addSkill, removeSkill, getProfile, updatePersonalInfo,
};
