/* eslint-disable max-len */
const express = require('express');

const router = express.Router();

// Item model to make queries
const Item = require('../../models/Items');
// const app = require('../..');

// * CREATING ROUTES

// @route is a  GET to api/items
// @description: Get ALL items
// #access Public
//* We do router.get instead of app.get because of the variable up top
//! we don't have to do router.get('/api/items) here, because we are
//! already hit that endpoint in the index/server.js file and are currently here
router.get('/', (req, res) => {
  // we want to take the model that we have, in this case line 5 and use the find method
  // this returns a promise, so we use .then
  Item.find()
    // this sorts the dates in descending order
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route is a  POST to api/items
// @description: Create a Item
// #access Public
//* We do router.get instead of app.get because of the variable up top
//! we don't have to do router.get('/api/items) here, because we are
//! already hit that endpoint in the index/server.js file and are currently here
router.post('/', (req, res) => {
  // creating a new variable and using Item() because Item is the name of our model
  // if we were posting to User then we'd do new User(), becuase that'd be the name of the model
  const newItem = new Item({
    // passing in a new object
    // name comes from the body of the request
    name: req.body.name,
    // name: req.body.name,
    // lastName: req.body.name,
    // age: req.body.name,
    // password: req.body.name,
  });

  // promised based as well, so we can use .then
  //* to test go to postman, set to post and then on headers change to content-type: application/json, and then click Body and select raw
  newItem.save().then((item) => res.json(item));
});

// @route is a  DELTE from api/items/:id   <- it's going to need an id
// @description: Delete a Item
// #access Public
// :id acts as a placeholder until we specify what it represents
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
