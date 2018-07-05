const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const googleKeys = require('./keys.js');
const {User} = require('../models/user-model');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: googleKeys.clientID,
  clientSecret: googleKeys.clientSecret,
  callbackURL: '/auth/google/redirect'
}, (accessToken, refreshToken, profile, done) => {

  User.findOne({googleID: profile.id}).then((doc) => {
    if(doc){
      console.log('User is ' + doc);
      done(null, doc);
    }else{
      var newUser = new User({
        username: profile.displayName,
        googleID: profile.id,
        photo: profile._json.image.url
      });
      newUser.save().then((info) => {
        console.log(info);
        done(null, info);
      }).catch((e) => console.log(e));
    }
  });

  })
);
