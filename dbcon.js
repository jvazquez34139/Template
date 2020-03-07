const mongoose = require('mongoose');

//structuring ideas
const ideaSchema = new mongoose.Schema({
  user: String,
  title: String,
  description: String
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
  mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true,
  useUnifiedTopology: true});
  return mongoose.connection;
}



module.exports.opendb = opendb;
