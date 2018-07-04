const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  // Passport handler
  res.send('logging out');
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// callback route for google redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('This is the redirect uri');
});

module.exports = router;
