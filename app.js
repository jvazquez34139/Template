const path = require('path');

const express = require('express'),
      app = express();
const helmet = require('helmet');
const cookieParser = require('cookie-parser');


app.use(helmet());
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('*', (req, res, next) => {
  //incase server shuts off this prevents the cookies and app.locals from
  //being out of sync
  if(req.cookies.username){
    req.app.locals.username = req.cookies.username;
  }else{
  }
  next();
})

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

const index = require('./routes/index');
app.use('/', index);
const regilog = require('./routes/regilog');
app.use('/', regilog);
const ideas = require('./routes/ideas');
app.use('/', ideas);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on port ' + port);
})
