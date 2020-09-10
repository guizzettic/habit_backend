// importing express and putting express.Router in a variable called router
const express = require('express');

const router = express.Router();

const users = require('../dummyDB');

router.get('/list', async (req, res) => {
  try {
    res.status(200).json({
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      message: 'an error has occurred',
      error: err,
    });
  }
});

//* with this we are able to capture the id of url and return only that users info
router.get('/list/:id', async (req, res) => {
  let { id } = req.params;
  id = Number(id);
  try {
    const user = users.find((user) => user._id === id);
    res.status(200).json({
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: 'an error occurred',
      error: err,
    });
  }
});
//* with this we are able to capture the name of url and return only that users info
router.get('/list/:name', async (req, res) => {
  let { name } = req.params;
  // name = String(name);
  try {
    const user = users.find((user) => user.name === name);
    res.status(200).json({
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: 'an error occurred',
      error: err,
    });
  }
});

module.exports = router;
