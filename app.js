const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/config/config.env' });
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('./config/passport')(passport);

var app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.PORT);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
   
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(require('./routes/index'));
app.use('/auth', require('./routes/auth'));

app.listen(PORT, console.log(`listening at ${3000}`));
