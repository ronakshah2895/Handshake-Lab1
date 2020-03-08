const { User, Job } = require('../models/index');

function postJob(req, res) {
  Job.create({
    ...req.body,
    creatorId: req.user.id,
  }).then((job) => {
    res.send(job);
  });
}

function getJobs(req, res) {
  Job.findAll({
    where: {
      creatorId: req.user.id,
    },
    attributes: ['title', 'category', 'location', 'salary', 'deadline', 'createdAt'],
    include: [{
      model: User,
      as: 'creator',
      attributes: ['name'],
    }],
  }).then((jobs) => {
    res.send(jobs);
  });
}

module.exports = { postJob, getJobs };
