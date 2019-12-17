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

const router = require('./routes/index');
app.use('/', router);

app.listen(3000, () => {
  console.log('listening on port 3000');
})
