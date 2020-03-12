const mongoose = require('mongoose');
const db = require('./config/database');

//structuring ideas
const ideaSchema = new mongoose.Schema({
  ideaIndex: Number,
  user: String,
  title: String,
});

//structuring users
const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});


const opendb = () => {
  VidJot = mongoose.model('VideoIdea', ideaSchema),
  VidJotUser = mongoose.model('Jotter', userSchema)
  //connect to database
  mongoose.connect(db.mongoURI, {useNewUrlParser: true,
  useUnifiedTopology: true});
  return mongoose.connection;
}



module.exports.opendb = opendb;
