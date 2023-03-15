const testingRouter = require('express').Router();
const User = require('../models/User');

testingRouter.post('/reset', async (req, res) => {
  await User.deleteMany({});

  response.status(204).end();
});

module.exports = testingRouter;
