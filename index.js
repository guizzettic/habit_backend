/* eslint-disable no-console */
// import all packages that we have installed
const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items').default

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const userRouter = require('./firstRoute/users');

// defining port number, in which our app needs to be started
const port = process.env.PORT || 5000;

// utilize logger package to get application details if needed
// use cors to enable Cross-Origin Resource Sharing
// use body-parser to handle HTTP POST requests
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// body parser middleware
app.use(bodyParser.json());
app.use('/users', userRouter);

// DB config
const db = require('./config/keys').mongoURI;

// connect to Mongo using mongoose and passing in db object
// this is promised based so we use .then
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log('error has occurred connecting to mongoose and :', err));

// Use Routes
// * anything that refers to /api/items, will refer to items variable which refers to the file.
app.use('/api/items', items)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on ${port}`);
});

// export our app module
module.exports = app;
