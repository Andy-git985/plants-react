const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerRouter = require('express').Router();
const User = require('../models/User');

registerRouter.post('/', async (req, res) => {
  const { firstName, lastName, password, email, role } = req.body;
  console.log('received', firstName, lastName, password, email, role);
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'username must be unique' });
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const newUser = new User({
    firstName,
    lastName,
    email,
    passwordHash,
    role,
  });
  await newUser.save();

  const accessToken = jwt.sign({ id: newUser._id }, process.env.SECRET, {
    expiresIn: '10s',
  });

  const refreshToken = jwt.sign({ id: newUser._id }, process.env.SECRET, {
    expiresIn: '30s',
  });

  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 30,
  });
  res.status(201).send({
    message: 'Successfully registered account',
    accessToken,
    user: newUser,
  });
});

module.exports = registerRouter;
