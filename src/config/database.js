const mongoose = require('mongoose');

mongoose.Promise = Promise;

const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost/guarda-nota';

const connect = () => mongoose.connect(mongodbUrl);

module.exports =
  {
    connect: connect
  }
