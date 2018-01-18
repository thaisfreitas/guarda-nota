import mongoose from 'mongoose';

mongoose.Promise = Promise;

const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost/guardaNota';

//create a connection with the database, return the connection
const connect = () => mongoose.connect(mongodbUrl);

export default {
  connect
}