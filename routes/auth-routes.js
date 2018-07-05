const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
  res.render('login',{user: req.user});
});

router.get('/logout', (req, res) => {
  // Passport handler
    req.logout();
    res.redirect('/');
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// callback route for google redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send(req.user);
  res.redirect('/profile');
});

module.exports = router;
