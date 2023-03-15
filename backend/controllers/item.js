const itemRouter = require('express').Router();
const Item = require('../models/Item');

itemRouter.get('/', async (request, response) => {
  response.status(200).json({ name: 'Monstera', quantity: 2 });
});

module.exports = itemRouter;
