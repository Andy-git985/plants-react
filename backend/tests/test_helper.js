const User = require('../models/User');

const initialUser = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'janeDoe@fakeEmail.com',
  passwordHash: 'aBadPassWord',
  role: 'client',
};

module.exports = {
  initialUser,
};
