const express = require('express');
const path = require('path');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');

const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoURI, {useNewUrlParser: true}, () => {
  console.log('Connected to mongodb');
});


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.sessionKey]
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


app.get('/', (req, res) => {
  res.render('home', {user: req.user});
});


app.listen(3000, () => {
  console.log('Listening to port 3000!');
});
