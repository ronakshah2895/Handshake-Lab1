const { Job } = require('../models/index');

function postJob(req, res) {
  Job.create({
    ...req.body,
    creatorId: req.user.id,
  }).then((job) => {
    res.send(job);
  });
}

module.exports = { postJob };
