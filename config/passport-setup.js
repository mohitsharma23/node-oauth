const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const googleKeys = require('./keys.js');

passport.use(new GoogleStrategy({
  clientID: googleKeys.clientID,
  clientSecret: googleKeys.clientSecret,
  callbackURL: '/auth/google/redirect'
}, (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  })
);
