const express = require('express');
let router = express.Router();
const dbcon = require('../dbcon.js');
router.get('/ideas', (req, res, next) => {
  const db = dbcon.opendb();
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    const query = VidJot.find({user: req.cookies.username}, function
    (err, vidJots){
      if(err) return handleError(err);
      // console.log(vidJots.length);
      res.render("ideas", {ideaArray: vidJots});
    })
  });
  // const idea = {title: "rare Diamonds", desc: "hello this is my video on minecrafting for rarer diamonds"};
  // console.log(req.cookies.title);
});

//use post method to read write to database
router.post('/ideapost', (req, res, next) => {
  const {title, description} = req.body;
  const {username} = req.cookies;
  if(username === undefined){
    res.redirect('/login');
  }else{
    const db = dbcon.opendb();
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      const newIdea = new VidJot({
        user: username,
        title: title,
        description: description
      });
      newIdea.save((err, newIdea) => {
        if(err) return console.error(err);
        console.log("New idea successfully saved.");
        res.redirect('ideas');
      });
    });
  }
});


module.exports = router;
