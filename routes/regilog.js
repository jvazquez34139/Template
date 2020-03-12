const express = require('express');
let router = express.Router();
const dbcon = require('../dbcon.js');


///REGISTER
router.get('/register', (req, res, next) => {
  res.render('register');
});

router.post('/register', (req, res, next) => {
  const {username, email, password, confirmPassword} = req.body;
  const db = dbcon.opendb();
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    const query = VidJotUser.find({username: username},
      function (err, vidJotUser){
        if(err) return handleError(err);
        if(vidJotUser.length > 0){
          res.render('register', {message1: "Username already taken."});
        }else{
          res.locals.message1 = "";
          if(password == confirmPassword){
            res.locals.message2 = "";
            const newUser = new VidJotUser({
              email: email,
              username: username,
              password: password,
            });
            newUser.save((err, newUser) => {
              if(err) return console.error(err);
              console.log('Successfully registered ' + newUser);
              res.redirect('/login');
            });
          }else{
            res.render('register', {message2: "Passwords were not the same."})
          }
        }
      })
  });
});

///LOG IN
router.get('/login', (req, res, next) => {
  res.render('login');
});
router.post('/login', (req, res, next) => {
  const {username, password} = req.body;
  const db = dbcon.opendb();
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    const query = VidJotUser.find({username: username}, function
    (err, vidJotUser){
      if(err) return handleError(err);
      if(vidJotUser.length >= 1){
        if(password == vidJotUser[0].password){
          res.cookie('username', username);
          req.app.locals.username = username;
          res.render('index');
        }else{
          res.render('login', {message2: "Wrong password. Try again"});
        }
      }else{
        res.render('login', {message1: "That user doesnt exist, please register!"});
      }
    });
  })
});

router.get('/logout', (req, res, next) => {
  res.clearCookie('username');
  req.app.locals.username = "";
  res.redirect('/login');
});

module.exports = router;
