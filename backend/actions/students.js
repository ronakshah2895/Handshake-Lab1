const { User } = require('../models/index');

function getStudents(req, res) {
  User.findAll({
    where: {
      is_company: false,
    },
    attributes: ['name', 'email', 'profile_image', 'college'],
  }).then((resp) => {
    res.send(resp);
  });
}

module.exports = { getStudents };
