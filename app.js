const path = require('path');

const express = require('express'),
      app = express();
const helmet = require('helmet');

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

const index = require('./routes/index');
app.use('/', index);
const regilog = require('./routes/regilog');
app.use('/', regilog);
const ideas = require('./routes/ideas');
app.use('/', ideas);


app.listen(3000, () => {
  console.log('listening on port 3000');
})
