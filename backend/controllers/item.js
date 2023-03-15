const itemRouter = require('express').Router();
const Item = require('../models/Item');

itemRouter.get('/', async (req, res) => {
  const items = await Item.find({});
  console.log(items);
  res.status(200).json(items);
});

itemRouter.post('/', async (req, res) => {
  const { name, quantity } = req.body;
  const newItem = new Item({
    name,
    quantity,
  });
  await newItem.save();
  res.status(201).json(newItem);
});

module.exports = itemRouter;
