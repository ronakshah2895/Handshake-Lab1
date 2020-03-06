const { Op } = require('sequelize');
const { User } = require('../models/index');

function getStudents(req, res) {
  User.findAll({
    where: {
      is_company: false,
      id: { [Op.ne]: req.user.id },
    },
    attributes: ['name', 'email', 'profile_image', 'college'],
  }).then((resp) => {
    res.send(resp);
  });
}

module.exports = { getStudents };
