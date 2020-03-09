const { User, Job } = require('../models/index');

function postJob(req, res) {
  Job.create({
    ...req.body,
    creatorId: req.user.id,
  }).then((job) => {
    const {
      title, category, location, salary, deadline, createdAt, description,
    } = job;
    res.send({
      title,
      category,
      location,
      salary,
      deadline,
      createdAt,
      description,
      creator: { name: req.user.name },
    });
  });
}

function getJobs(req, res) {
  Job.findAll({
    where: {
      creatorId: req.user.id,
    },
    attributes: ['title', 'category', 'location', 'salary', 'deadline', 'createdAt', 'description'],
    include: [{
      model: User,
      as: 'creator',
      attributes: ['name'],
    }],
    order: [['deadline', 'DESC']],
  }).then((jobs) => {
    res.send(jobs);
  });
}

module.exports = { postJob, getJobs };
