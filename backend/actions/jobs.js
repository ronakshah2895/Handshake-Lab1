const fs = require('fs');
const { v1: uuidv1 } = require('uuid');
const { literal } = require('sequelize');
const { User, Job, jobApplication } = require('../models/index');

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
  let filterObj;
  if (req.user.is_company) filterObj = { where: { creatorId: req.user.id } };
  else filterObj = { where: literal('job_applications.id IS NULL') };
  Job.findAll({
    ...filterObj,
    attributes: ['id', 'title', 'category', 'location', 'salary', 'deadline', 'createdAt', 'description'],
    include: [{
      model: User,
      as: 'creator',
      attributes: ['name', 'email'],
    }, {
      model: jobApplication,
      where: {
        applicantId: req.user.id,
      },
      attributes: [],
      required: false,
    }],
    order: [['deadline', 'DESC']],
  }).then((jobs) => {
    res.send(jobs);
  });
}

function applyJob(req, res) {
  const resume = req.files[0];
  if (!fs.existsSync('public/resumes')) {
    fs.mkdirSync('public/resumes');
  }
  const fileExt = resume.originalname.substring(resume.originalname.lastIndexOf('.'));
  const path = `resumes/${uuidv1() + fileExt}`;
  fs.writeFile(`public/${path}`, resume.buffer, () => {
    jobApplication.create({
      resume: path,
      jobId: req.body.jobId,
      applicantId: req.user.id,
      status: 'Pending',
    }).then(() => {
      res.send(req.body.jobId);
    });
  });
}

function getApplications(req, res) {
  Job.findAll({
    attributes: ['title'],
    include: [{
      model: User,
      as: 'creator',
      attributes: ['name'],
    }, {
      model: jobApplication,
      where: {
        applicantId: req.user.id,
      },
      attributes: ['status', 'createdAt'],
    }],
  }).then((applications) => {
    res.send(applications);
  });
}

module.exports = {
  postJob, getJobs, applyJob, getApplications,
};
