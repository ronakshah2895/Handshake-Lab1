const express = require('express');
const session = require('express-session');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));
app.use(multer().any());

app.use(require('./routes'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
