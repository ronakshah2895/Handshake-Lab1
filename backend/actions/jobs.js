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
      creator: { name: req.user.name, email: req.user.email },
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
  let appFilter;
  if (req.body && req.body.jobId) appFilter = { jobId: req.body.jobId };
  else appFilter = { applicantId: req.user.id };
  Job.findAll({
    attributes: ['title'],
    include: [{
      model: User,
      as: 'creator',
      attributes: ['name'],
    }, {
      model: jobApplication,
      where: {
        ...appFilter,
      },
      include: [{
        model: User,
        as: 'applicant',
        attributes: ['name', 'email', 'profile_image'],
      }],
      attributes: ['id', 'status', 'createdAt', 'resume'],
    }],
  }).then((applications) => {
    res.send(applications);
  });
}

function updateAppStatus(req, res) {
  jobApplication.update({
    status: req.body.status,
  }, {
    where: {
      id: req.body.appId,
    },
  }).then(() => {
    res.send(req.body.appId);
  });
}

module.exports = {
  postJob, getJobs, applyJob, getApplications, updateAppStatus,
};
