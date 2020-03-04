const express = require('express');
let router = express.Router();

router.get('/ideas', (req, res, next) => {
  res.render('ideas');
})
module.exports = router;
