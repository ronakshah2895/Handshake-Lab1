const express = require('express');
const session = require('express-session');
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');

const app = express();
const port = 3001;
dotenv.config();

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(multer().any());

app.use(require('./routes'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
