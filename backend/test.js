/* global it */
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

it('Positive Test Should check credentials and return status code', (done) => {
  chai.request('http://127.0.0.1:3001')
    .post('/auth/login')
    .send({ password: 'test', username: 'test@test.com' })
    .end((err, res) => {
      expect(res).to.have.status(200);
      done();
    });
});

it('Negative Test Should should check for invalid login', (done) => {
  chai.request('http://127.0.0.1:3001')
    .post('/auth/login')
    .send({ password: '12345', username: 'test@test.com' })
    .end((err, res) => {
      expect(res).to.have.status(401);
      done();
    });
});

it('Negative Signup Test', (done) => {
  chai.request('http://127.0.0.1:3001')
    .post('/auth/register')
    .send({
      email: 'test@test.com',
      password: 'test',
      name: 'Test User',
      is_company: 0,
    })
    .end((err, res) => {
      expect(res).to.have.status(400);
      done();
    });
});

it('Sign Up User Test', (done) => {
  chai.request('http://127.0.0.1:3001')
    .post('/auth/register')
    .send({
      email: 'test1@test.com',
      password: 'test',
      name: 'Test User',
      is_company: 0,
    })
    .end((err, res) => {
      expect(res).to.have.status(200);
      done();
    });
});

it('Sign Up Company Test', (done) => {
  chai.request('http://127.0.0.1:3001')
    .post('/auth/register')
    .send({
      email: 'test1c@test.com',
      password: 'test',
      name: 'Test Company',
      is_company: 1,
    })
    .end((err, res) => {
      expect(res).to.have.status(200);
      done();
    });
});
