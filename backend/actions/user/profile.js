const { userSkill } = require('../../models/index');

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
  console.log(req.user);
  userSkill.findAll({
    where: {
      userId: req.user.id,
    },
  }).then((skills) => {
    const skillsArr = [];
    skills.forEach((skill) => {
      skillsArr.push(skill.dataValues.skill);
    });
    res.send(skillsArr);
  });
}

module.exports = {
  addSkill, removeSkill, getProfile,
};
