const mongoose = require('mongoose');

mongoose.Promise = Promise;

const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost/guarda-nota';

const connect = () => mongoose.connect(mongodbUrl, { useMongoClient: true });

module.exports =
  {
    connect: connect
  }
