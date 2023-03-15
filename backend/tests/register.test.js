const supertest = require('supertest');
const mongoose = require('mongoose');
const helper = require('./test_helper');
const app = require('../app');
const api = supertest(app);

const User = require('../models/User');

beforeEach(async () => {
  await User.deleteMany({});
  await User.insertMany(helper.initialUser);
});

describe('when there is a new user registered', () => {
  test('a successful message is returned', async () => {
    const newUser = {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janeDoe@fakeEmail.com',
      password: 'aBadPassWord',
      role: 'client',
    };
    const response = await api
      .post('/register')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    console.log(response);
  });
});
