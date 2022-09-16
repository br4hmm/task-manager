const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const tasksRoutes = require('./routes/tasks');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const dbURI = process.env.MONGODB_URI;

mongoose
  .connect(dbURI)
  .then(result =>
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  )
  .catch(err => () => {
    console.log(err);
    process.exit(1);
  });

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/tasks', tasksRoutes);
